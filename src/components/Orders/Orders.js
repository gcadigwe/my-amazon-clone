import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { useSelector } from "react-redux";
import Order from "../Order/Order";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { basket } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (basket.user) {
      db.collection("users")
        .doc(basket?.user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [basket]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
