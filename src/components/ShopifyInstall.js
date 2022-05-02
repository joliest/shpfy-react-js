import React from "react";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const ShopifyInstall = () => {
    return (
        <div>
            <Typography variant="h3">You can now access Shopify data</Typography>
            <Link to="/">Back</Link>
        </div>
    )
}

export default ShopifyInstall;