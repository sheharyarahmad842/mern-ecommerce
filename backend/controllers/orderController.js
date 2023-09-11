import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("Add Order Items");
});

// @desc    Get order by id
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("Get order by id");
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("Update order to paid");
});

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("Update order to delivered");
});

// @desc   Get logged in user order
// @route   Get /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("Get my orders");
});

// @desc   Get all orders
// @route   Get /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("Get all orders");
});

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
};
