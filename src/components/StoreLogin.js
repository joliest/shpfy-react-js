import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import './StoreLogin.scss'
import {NGROK} from "../constants";
import Products from "./Products";
import axios from "axios";

const MY_SHOPIFY_DOT_COM = '.myshopify.com';
class StoreLogin extends React.Component {
    state = {
        storeName: 'sample-store-1ventory',
        products: [],
    }

    handleOnChange = (e) => {
        this.setState({ storeName: e.target.value });
    }

    handleClick = () => {
        const { storeName } = this.state;
        if (storeName) {
            const url = `${NGROK}/shopify?shop=${storeName}.myshopify.com`;
            window.location.replace(url);
        }
    }

    getProducts = async () => {
        const { storeName } = this.state;
        try {
            const response = await axios.get(`${NGROK}/products?shop=${storeName}.myshopify.com`)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { storeName } = this.state;
        const isButtonDisabled = !storeName;
        return (
            <div className="store-login">
                <Box component="form" noValidate autoComplete="on">
                    <TextField
                        id="outlined-basic"
                        className="text-field"
                        label="Enter Shopify store"
                        variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">{MY_SHOPIFY_DOT_COM}</InputAdornment>,
                        }}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={storeName}
                        onChange={this.handleOnChange}
                    />
                    <Box>
                        <Button
                            className="button"
                            variant="contained"
                            size="large"
                            onClick={this.handleClick}
                            disabled={isButtonDisabled}
                        >
                            Login to Sample Shopify App
                        </Button>
                    </Box>
                </Box>
                <Products
                    storeName={storeName}
                    getProducts={this.getProducts}
                    isButtonDisabled={isButtonDisabled}
                />
            </div>
        )
    }
}

export default StoreLogin;