import React from "react";
import {Typography} from "@mui/material";
import {Link, useSearchParams} from "react-router-dom";

const ShopifyInstall = () => {
    const [searchParams] = useSearchParams();
    const shop = searchParams.get('shop');
    return (
        <div>
            <Typography variant="h3">You can now access Shopify data</Typography>
            <Link to={`/?shop=${shop}`}>Back</Link>
        </div>
    )
}

export default ShopifyInstall;