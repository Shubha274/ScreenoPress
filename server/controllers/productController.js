import { v2 as cloudinary } from "cloudinary";
import Product from "../models/Product.js";
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);
    const image = req.files;
    let imageUrl = await Promise.all(
      image.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url; //images url
      })
    );
    await Product.create({ ...productData, images: imageUrl });
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
export const productList = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
export const productById = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//change product instock
export const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body;
    const result = await Product.findByIdAndUpdate(id, { inStock });
    res.json({ success: true, message: "Stock Updated", result });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
