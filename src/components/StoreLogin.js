import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import './StoreLogin.scss'
import {NGROK} from "../constants";

const MY_SHOPIFY_DOT_COM = '.myshopify.com';
class StoreLogin extends React.Component {
    state = {
        storeName: null,
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

    render() {
        const { storeName } = this.state;
        return (
            <div className="store-login">
                <Box component="form" noValidate autoComplete="off">
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
                        onChange={this.handleOnChange}
                    />
                    <Box>
                        <Button
                            className="button"
                            variant="contained"
                            size="large"
                            onClick={this.handleClick}
                            disabled={!storeName}
                        >
                            Login to Sample Shopify App
                        </Button>
                    </Box>
                </Box>
            </div>
        )
    }
}

export default StoreLogin;