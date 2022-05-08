import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import {NGROK} from "../constants";

const Item = (props) => {
    const {
        title,
        image,
        product_type,
    } = props;
    console.log(props)
    return (
        <Card sx={{ display: 'flex', width: 750 }}>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={image.src}
                alt="Live from space album cover"
            />
            <Box sx={{ width: '100%'}}>
                <CardContent>
                    <Typography
                        component="div"
                        variant="subtitle1"
                        sx={{ textAlign: 'left' }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        component="div"
                        sx={{ textAlign: 'left' }}
                    >
                        {product_type}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}

const Products = (props) => {
    const {
        getProducts,
        storeName,
        isButtonDisabled,
    } = props;

    const [products, setProducts] = useState(null);

    useEffect(() => {
        if (products === null) {
            axios.get(`${NGROK}/products?shop=${storeName}.myshopify.com`)
                .then((response) => {
                    const products = response.data.products || [];
                    setProducts(products)
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }, []);
    return (
        <Box mt={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Box>
                <Button
                    className="button"
                    variant="contained"
                    size="large"
                    onClick={getProducts}
                    disabled={isButtonDisabled}
                >
                    Display Products
                </Button>
            </Box>
            <Stack spacing={2} mt={5} sx={{ alignItems: 'center' }}>
                {
                    products ? (
                        products.map((product) => {
                            const { id, ...rest } = product;
                            return (
                                <Item key={id} {...rest} />
                            )
                        })
                    ) : null
                }
            </Stack>
        </Box>
    );
}


export default Products;