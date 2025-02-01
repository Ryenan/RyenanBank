import React from "react";
import { View, Image } from "react-native";
import DivButtons from "./divButtons/divButtons";
import { SaldoSreen } from "./divSaldo/saldo";

export default function Body() {
  return (
    <View>
      <SaldoSreen></SaldoSreen>
      <DivButtons></DivButtons>
      <View
        style={{
          borderRadius: 100,
          borderWidth: 1,
          borderColor: "green",
          width: "90%",
          top: 60,
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Image
          source={{
            uri: "https://decorandocasas.com.br/wp-content/uploads/2014/07/ANUNCIE-AQUI.jpg",
          }}
          style={{
            width: "100%",
            height: 150,
            objectFit: "fill",
            borderRadius: 100,
          }}
        ></Image>
      </View>
    </View>
  );
}
