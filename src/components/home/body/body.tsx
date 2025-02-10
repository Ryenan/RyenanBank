import React from "react";
import { StyleSheet, View, Image } from "react-native";
import DivButtons from "./divButtons/divButtons";
import { SaldoSreen } from "./divSaldo/saldo";
import DivCards from "./divCards/cards";

export default function Body() {
  return (
    <View>
      <SaldoSreen></SaldoSreen>
      <DivButtons></DivButtons>
      <View style={styles.view}>
        <Image
          source={{
            uri: "https://i.ytimg.com/vi/j2kiOUHvpHg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD8ddiZhzvsZi7HPI1prz17xaDY_Q",
          }}
          style={styles.image}
        ></Image>
      </View>
      <View style={{ height: 750 }}>
        <DivCards></DivCards>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
    objectFit: "fill",
    borderRadius: 100,
  },

  view: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "green",
    marginBottom: 80,
    width: "90%",
    top: 60,
    alignItems: "center",
    margin: "auto",
  },
});
