const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IJPUfGh77TElrnX5YZHRBVOX2A7RX7HheBRasC7OwFuhuQRmYY6WKR2BZJRCQ5K02dqtJmzpbwuNiKfeVytQAfF00wZw6VZq9"
);

// - app config
const app = express();

// - middleware
app.use(cors());
app.use(express.json());

// - api routes
app.get("/", (req, res) => {
  res.status(200).send("hello word");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment Request Received ...", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});
// - listen
exports.api = functions.https.onRequest(app);
