import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Styles } from "./headerStyles";

export default function Header() {
  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <View style={Styles.sec1}>
          <View style={Styles.sec1View}>
            <View>
              <Text style={[Styles.textCenter, Styles.title]}>
                Olá,
                <Text style={{ fontWeight: "bold", color: "#35c23c" }}>
                  {" "}
                  Usuario
                </Text>
              </Text>
              <Text style={[Styles.textCenter, Styles.title]}>
                Seja bem-vindo novamente
              </Text>
            </View>
            <Image
              source={{
                uri: "https://download.logo.wine/logo/Here_(company)/Here_(company)-Logo.wine.png",
              }}
              style={Styles.miniImage}
            />
          </View>
          <View style={Styles.sec1View}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AJM9wkP__z2M-hovSAWcTb_9XJ6smy3NKw&s",
              }}
              style={Styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
