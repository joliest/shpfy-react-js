import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";

const Item = () => {
    return (
        <Card sx={{ display: 'flex', width: 750, }}>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image="https://cdn.shopify.com/s/files/1/0624/9316/3779/products/31n6VU6xolL_635e4a8f-94c0-4fb1-b94e-df52e8e78ced.jpg?v=1651536879"
                alt="Live from space album cover"
            />
            <Box sx={{ width: '100%' }}>
                <CardContent>
                    <Typography
                        component="div"
                        variant="h5"
                        sx={{ textAlign: 'left' }}
                    >
                        Live From Space
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        sx={{ textAlign: 'left' }}
                    >
                        Mac Miller
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}

const Products = () => {
    return (
        <Box mt={5} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Stack spacing={2} mt={5}>
                <Item />
            </Stack>
        </Box>
    );
}


export default Products;