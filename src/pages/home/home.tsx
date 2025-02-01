import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/home/header/header";
import Body from "../../components/home/body/body";

export default function Home() {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Header></Header>
      <Body></Body>
    </ScrollView>
  );
}
