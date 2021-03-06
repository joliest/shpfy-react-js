import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import './StoreLogin.scss'
import {NGROK} from "../constants";
import Products from "./Products";
import {useSearchParams} from "react-router-dom";

const MY_SHOPIFY_DOT_COM = '.myshopify.com';
const StoreLogin = () => {
    const [searchParams] = useSearchParams();
    const shop = searchParams.get('shop');
    const store = shop ? shop.replace(MY_SHOPIFY_DOT_COM, '') : 'sample-store-1ventory';
    const [storeName, setStoreName] = useState(store);
    const isButtonDisabled = !storeName;


    const handleOnChange = (e) => {
        setStoreName(e.target.value);
    }

    const handleClick = () => {
        if (storeName) {
            const url = `${NGROK}/shopify?shop=${storeName}.myshopify.com`;
            window.location.replace(url);
        }
    }

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
                    onChange={handleOnChange}
                />
                <Box>
                    <Button
                        className="button"
                        variant="contained"
                        size="large"
                        onClick={handleClick}
                        disabled={isButtonDisabled}
                    >
                        Store Login
                    </Button>
                </Box>
            </Box>
            <Products
                storeName={storeName}
                isButtonDisabled={isButtonDisabled}
            />
        </div>
    )
}
export default StoreLogin;