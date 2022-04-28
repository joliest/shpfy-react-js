import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './StoreLogin.scss'
import { NGROK } from '../constants';

const StoreLogin = () => {
    const loginToShopify = async () => {
        try {
            const url = `${NGROK}/shopify?shop=sample-store-1ventory.myshopify.com`;
            const response = await axios.get(url);
            console.log(response)
        } catch (e) {
            console.error('Something went wrong. ::: ', e)
        }
    };
    return (
        <div className="store-login">
            <Box component="form" noValidate autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    className="text-field"
                    label="Enter Shopify store"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <Box>
                    <Button
                        className="button"
                        variant="contained"
                        size="large"
                        onClick={loginToShopify}
                    >
                        Login to Sample Shopify App
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default StoreLogin;