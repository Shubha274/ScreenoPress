import Order from "../models/Order.js";
import Product from "../models/Product.js";
import stripe from "stripe";
import "dotenv/config";
export const placeOrderCOD = async (req, res) => {
  try {
    const { items, address } = req.body;
    if (!address || items.length == 0) {
      return res.json({ success: false, message: "Invalid data" });
    }
    // Step 1: Fetch item-wise prices
    const itemAmounts = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findById(item.product);
        if (!product || product.price <= 0) {
          throw new Error(
            `Invalid price for product: ${product?.name || "Unknown"}`
          );
        }
        return product.price * item.quantity;
      })
    );

    // Step 2: Sum up all item totals
    let amount = itemAmounts.reduce((acc, val) => acc + val, 0);

    // Step 3: Add 2% tax
    amount += Math.floor(amount * 0.02);

    await Order.create({
      userId: req.userId,
      items,
      amount,
      address,
      paymentType: "COD",
    });
    return res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const placeOrderStripe = async (req, res) => {
  try {
    const { items, address } = req.body;
    const { origin } = req.headers;
    let productData = [];

    if (!address || items.length === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }

    // Calculate amount using items
    let amount = await items.reduce(async (accPromise, item) => {
      const acc = await accPromise;
      const product = await Product.findById(item.product);
      if (!product) throw new Error("Product not found");

      productData.push({
        name: product.name,
        price: product.offerPrice,
        quantity: item.quantity,
      });

      return acc + product.offerPrice * item.quantity;
    }, Promise.resolve(0)); // fix: ensure reduction starts with a Promise

    // Add 2% tax
    const tax = Math.floor(amount * 0.02);
    amount += tax;

    // Save Order
    const order = await Order.create({
      userId: req.userId,
      items,
      amount,
      address,
      paymentType: "Online",
    });

    // Initialize Stripe
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

    // Prepare Stripe line_items
    const line_items = productData.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.floor(item.price + item.price * 0.02) * 100, // includes tax
      },
      quantity: item.quantity,
    }));

    // Create Stripe checkout session
    const session = await stripeInstance.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/loader?next=my-orders`,
      cancel_url: `${origin}/cart`,
      metadata: {
        orderId: order._id.toString(),
        userId: req.userId,
      },
    });

    return res.json({ success: true, url: session.url });
  } catch (error) {
    console.error("Stripe Order Error:", error);
    return res.json({ success: false, message: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate({
        path: "items.product",
        select: "name images price offerPrice",
      })
      .populate({
        path: "address",
        select: "street city state country",
      })
      .sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
