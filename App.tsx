import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/services/routes";

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar hidden={true} />
    </>
  );
}
