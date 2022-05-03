import axios from "axios";
import {NGROK} from "../constants";

const getProducts = async () => {
    try {
        await axios.get(`${NGROK}/products`)
    } catch (e) {
        console.log(e)
    }
}