import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './StoreLogin.scss'
import {NGROK} from "../constants";


class StoreLogin extends React.Component {
    render() {
        const url = `${NGROK}/shopify?shop=sample-store-1ventory.myshopify.com`;
        const handleClick = () => {
            window.location.replace(url)
        }
        return (
            <div className="store-login">
                <Box component="form" noValidate autoComplete="off">
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
                            onClick={handleClick}
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