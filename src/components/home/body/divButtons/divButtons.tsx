import React from "react";
import { View } from "react-native";
import { Styles } from "./divButtonsStyles";
import { ImageButton } from "./components/imageButton";

function alerta() {
  return alert("Pic pic piczin");
}

export default function DivButtons() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={Styles.buttons}>
        <ImageButton
          imageUri="https://img.icons8.com/?size=100&id=gVRvEBJpfLLo&format=png&color=000000"
          onPress={alerta}
          text="Pix"
        ></ImageButton>
        <ImageButton
          imageUri="https://img.icons8.com/?size=100&id=Wfxy1YusI2FT&format=png&color=000000"
          onPress={alerta}
          text="Transferir"
        ></ImageButton>
      </View>
      <View style={Styles.buttons}>
        <ImageButton
          imageUri="https://img.icons8.com/?size=100&id=4RiqMkW317aH&format=png&color=000000"
          onPress={alerta}
          text="InvesteFácil"
        ></ImageButton>
        <ImageButton
          imageUri="https://img.icons8.com/?size=100&id=eRBQnHcoS0dI&format=png&color=000000"
          onPress={alerta}
          text="Conversão"
        ></ImageButton>
      </View>
      <View style={Styles.buttons}>
        <ImageButton
          imageUri="https://img.icons8.com/?size=100&id=D73vYQubHfOR&format=png&color=000000"
          onPress={alerta}
          text="Cofrinho"
        ></ImageButton>
        <ImageButton
          imageUri="https://img.icons8.com/?size=100&id=tObbWUYHpkPk&format=png&color=000000"
          onPress={alerta}
          text="Cartões"
        ></ImageButton>
      </View>
      <View style={Styles.buttons}>
        <ImageButton
          imageUri="https://img.icons8.com/?size=100&id=er0rb5suPmwF&format=png&color=000000"
          onPress={alerta}
          text="Recarga"
        ></ImageButton>
        <ImageButton
          imageUri="https://img.icons8.com/?size=100&id=H9HWhhzFaxMh&format=png&color=000000"
          onPress={alerta}
          text="Gift Cards"
        ></ImageButton>
      </View>
    </View>
  );
}
