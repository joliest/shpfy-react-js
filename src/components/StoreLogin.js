import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './StoreLogin.scss'
import {Link} from "react-router-dom";

class StoreLogin extends React.Component {
    render() {
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
                            component={Link}
                            className="button"
                            variant="contained"
                            size="large"
                            to="/shopify-install"
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