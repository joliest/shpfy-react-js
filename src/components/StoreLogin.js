import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './StoreLogin.scss'

const StoreLogin = () => {
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

                    >
                        Login to Sample Shopify App
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default StoreLogin;