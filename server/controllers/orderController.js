import Order from "../models/Order.js";
export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    if (!address || items.length == 0) {
      return res.json({ success: false, message: "Invalid data" });
    }
    //Calculate amount using items
    let amount = await items.reduce(async (acc, items) => {
      const product = await items.reduce(async (acc, items) => {
        return (await acc) + product.offerPrice * items.quantity;
      }, 0);
      //add tax charge
      amount += Math.floor(amount * 0.02);
      await placeOrderCOD.create({
        userId,
        items,
        amount,
        address,
        paymentType: "COD",
      });
    });
    return res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
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
