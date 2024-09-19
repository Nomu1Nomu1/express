import Barang from "../models/Barang.js";

export const product = async (req, res) => {
    try {
        const response = await Barang.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}