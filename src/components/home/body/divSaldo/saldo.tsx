import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "./saldoStyle";

export function SaldoSreen() {
  return (
    <View style={Styles.container}>
      <View style={{gap: 5}}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Seu saldo:</Text>
        <Text style={[Styles.saldo, { fontSize: 30 }]}>2,00 R$</Text>
      </View>
      <TouchableOpacity style={{ top: 85 }}>
        <Text style={[Styles.saldo, {textDecorationLine: "underline"}]}>Consultar seu saldo</Text>
      </TouchableOpacity>
    </View>
  );
}
