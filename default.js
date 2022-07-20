import { products } from "./Data/product.js";
import Product from "./Model/productSchema.js";

const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log("Data inserted successfully!");
    } catch (error) {
        console.log("An error occured!", error.message);
    }
};

export default DefaultData;
