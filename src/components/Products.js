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
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import TextField from "@mui/material/TextField";

const Item = (props) => {
    const {
        vendor,
        title,
        image,
        product_type,
        body_html,
    } = props;
    return (
        <Card sx={{ display: 'flex', width: 750 }}>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={image ? image.src : ''}
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
                        {product_type} ({vendor})
                    </Typography>
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            component="div"
                            sx={{
                                textAlign: 'left',
                                height: 40,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                            }}
                        >
                            {body_html}
                        </Typography>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    )
}

const Products = (props) => {
    const {
        storeName,
        isButtonDisabled,
    } = props;

    const [products, setProducts] = useState(null);
    const [filterType, setFilterType] = useState('handle');
    const [filterValue, setFilterValue] = useState('');

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

    const onSelectChange = (e) => {
        setFilterType(e.target.value)
    }
    const handleSetFilterValue = (e) => {
        setFilterValue(e.target.value)
    }

    const handleOnSearch = () => {
        axios.get(`${NGROK}/products?shop=${storeName}.myshopify.com&${filterType}=${filterValue}`)
            .then((response) => {
                const products = response.data.products || [];
                setProducts(products)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <Box
            mt={5}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
        >
            <Grid container spacing={2} style={{ justifyContent: 'center' }}>
                <Grid item xs={2}>
                    <FormControl style={{ width: '100%' }}>
                        <InputLabel>Filter</InputLabel>
                        <Select
                            labelId="filter"
                            id="filter"
                            value={filterType}
                            label="Filter"
                            onChange={onSelectChange}
                        >
                            <MenuItem value="handle">Handle</MenuItem>
                            <MenuItem value="vendor">Vendor</MenuItem>
                            <MenuItem value="status">Status</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-basic"
                        label="Enter Filter value"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true
                        }}
                        sx={{ width: '100%', flex: 2 }}
                        value={filterValue}
                        onChange={handleSetFilterValue}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        style={{ height: '100%', width: '100%' }}
                        variant="contained"
                        size="large"
                        onClick={handleOnSearch}
                        disabled={isButtonDisabled || !filterValue}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
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