import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Timeline from "../Pages/Timeline/Timeline";
import State from "../Pages/State/State";
import FriendDetails from "../FriendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("Friends.json"),
  },
  {
    path: "/timeline",
    element: <Timeline></Timeline>,
  },
  {
    path: "/states",
    element: <State></State>,
  },
  {
    path: "/friends/:id",
    element: <FriendDetails></FriendDetails>,
    loader: () => fetch("Friends.json"),
  },
]);
