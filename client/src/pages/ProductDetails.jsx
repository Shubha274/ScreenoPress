import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { products, navigate, currencySymbol, addToCart } = useAppContext();
  const { id } = useParams();

  const [thumbnail, setThumbnail] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const product = products.find((item) => item._id === id);
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState({ front: false, back: false });
  const [customDesc, setCustomDesc] = useState("");
  const [designFile, setDesignFile] = useState(null);
  const formValid =
    quantity > 0 && (location.front || location.back) && designFile !== null;
  useEffect(() => {
    if (products.length > 0) {
      const related = products.filter(
        (item) => item.category === product.category && item._id !== product._id
      );
      setRelatedProducts(related.slice(0, 5));
    }
  }, [products]);
  const handleAddToCart = (productId) => {
    const customData = {
      quantity,
      location,
      designFileName: designFile?.name || "",
    };

    console.log("Custom order:", { productId, customData });

    // You could also store this in context or send it to backend
    addToCart(productId);
  };
  useEffect(() => {
    setThumbnail(product?.images[0] ? product.images[0] : null);
  }, [product]);
  return (
    product && (
      <div className="mt-12">
        <p>
          <Link to={"/"}>Home</Link> /<Link to={"/products"}>Services</Link> /
          <Link to={`/products/${product.category.toLowerCase()}`}>
            {product.category}
          </Link>
          /<span className="text-primary"> {product.name}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-16 mt-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
              <img src={thumbnail} alt="Selected product" />
            </div>
          </div>

          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{product.name}</h1>

            <div className="mt-6">
              {/* <p className="text-gray-500/70 line-through">
                MRP: {currencySymbol}
                {product.price}
              </p> */}
              <p className="text-2xl font-medium">
                MRP: {currencySymbol}
                {product.price}
              </p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            {/* Quantity Input
            <div>
              <label className="block mb-1 text-gray-700">Quantity</label>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value)))
                }
                className="w-full border border-gray-300 px-4 py-2 rounded outline-none"
                required
              />
            </div> */}

            {/* Location Selection */}
            <div>
              <p className="mb-1 text-gray-700">Print Location</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={location.front}
                    onChange={(e) =>
                      setLocation({ ...location, front: e.target.checked })
                    }
                  />
                  Front
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={location.back}
                    onChange={(e) =>
                      setLocation({ ...location, back: e.target.checked })
                    }
                  />
                  Back
                </label>
              </div>
            </div>

            {/* Description Textarea */}
            <div>
              <label className="block mb-1 text-gray-700">
                Additional Notes
              </label>
              <textarea
                value={customDesc}
                onChange={(e) => setCustomDesc(e.target.value)}
                placeholder="Add design instructions..."
                rows={3}
                className="w-full border border-gray-300 px-4 py-2 rounded outline-none resize-none"
              ></textarea>
            </div>

            {/* File Upload */}
            <div>
              <label className="block mb-1 text-gray-700">
                Upload Design File
              </label>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setDesignFile(e.target.files[0])}
                className="w-full p-2 rounded "
              />
            </div>
            <button
              disabled={!formValid}
              onClick={() => handleAddToCart(product._id)}
              className={`w-full py-3.5 cursor-pointer font-medium ${
                formValid
                  ? "bg-primary text-emerald-50"
                  : "bg-gray-100/50 text-gray-400 cursor-not-allowed"
              } transition`}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <div className="flex flex-col items-center w-max">
            <p className="text-3xl font-medium">Related Products</p>
            <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
            {relatedProducts
              .filter((product) => product.inStock)
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
          <button
            onClick={() => {
              navigate("/products");
              scrollTo(0, 0);
            }}
            className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition"
          >
            See more
          </button>
        </div>
      </div>
    )
  );
};
export default ProductDetails;
