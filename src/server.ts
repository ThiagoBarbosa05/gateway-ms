import express from "express";
import httpProxy from "express-http-proxy";
import { env } from "./env";

const app = express();

const RestaurantProxy = httpProxy(env.RESTAURANT_API_URL, {
  preserveHostHdr: true,
  parseReqBody: false,
});

const authProxy = httpProxy(env.AUTH_API_URL, {
  preserveHostHdr: true,
  parseReqBody: false,
});

const storeProxy = httpProxy(env.STORE_API_URL, {
  preserveHostHdr: true,
  parseReqBody: false,
});

const deliveryProxy = httpProxy(env.DELIVERY_API_URL, {
  preserveHostHdr: true,
  parseReqBody: false,
});

// restaurant

app.get("/api/dishes", (req, res, next) => {
  RestaurantProxy(req, res, next);
});

app.get("/api/dishes/:id", (req, res, next) => {
  RestaurantProxy(req, res, next);
});

app.post("/api/dishes", (req, res, next) => {
  RestaurantProxy(req, res, next);
});

app.put("/api/dishes/:id", (req, res, next) => {
  RestaurantProxy(req, res, next);
});

app.delete("/api/dishes/:id", (req, res, next) => {
  RestaurantProxy(req, res, next);
});

//auth

app.post("/api/customer/register", (req, res, next) => {
  authProxy(req, res, next);
});

app.post("/api/customer/authenticate", (req, res, next) => {
  authProxy(req, res, next);
});

app.post("/api/admin/authenticate", (req, res, next) => {
  authProxy(req, res, next);
});

// store

app.post("/cart", (req, res, next) => {
  storeProxy(req, res, next);
});

app.delete("/cart", (req, res, next) => {
  storeProxy(req, res, next);
});

app.get("/cart", (req, res, next) => {
  storeProxy(req, res, next);
});

app.put("/cart/item", (req, res, next) => {
  storeProxy(req, res, next);
});

app.delete("/cart/item/:id", (req, res, next) => {
  storeProxy(req, res, next);
});

app.post("/address", (req, res, next) => {
  storeProxy(req, res, next);
});

app.delete("/address/:id", (req, res, next) => {
  storeProxy(req, res, next);
});

app.get("/address", (req, res, next) => {
  storeProxy(req, res, next);
});

app.post("/orders", (req, res, next) => {
  storeProxy(req, res, next);
});

app.get("/api/orders", (req, res, next) => {
  deliveryProxy(req, res, next);
});

app.put("/api/orders/confirm/:id", (req, res, next) => {
  deliveryProxy(req, res, next);
});

app.put("/api/orders/cancelled/:id", (req, res, next) => {
  deliveryProxy(req, res, next);
});

app.put("/api/orders/dispatch/:id", (req, res, next) => {
  deliveryProxy(req, res, next);
});

app.put("/api/orders/return/:id", (req, res, next) => {
  deliveryProxy(req, res, next);
});

app.get("/api/metrics/month-cancelled-orders", (req, res, next) => {
  deliveryProxy(req, res, next);
});

app.get("/api/metrics/day-orders", (req, res, next) => {
  deliveryProxy(req, res, next);
});

app.get("/api/metrics/month-orders", (req, res, next) => {
  deliveryProxy(req, res, next);
});

app.get("/api/metrics/receipts-orders", (req, res, next) => {
  deliveryProxy(req, res, next);
});

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
