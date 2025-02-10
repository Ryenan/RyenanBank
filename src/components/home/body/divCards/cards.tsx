import React from "react";
import { Card } from "./components/card";
import { View, Linking } from "react-native";

export default function DivCards() {
  const abrirLink = () => {
    Linking.openURL("https://ryenan.github.io/site/");
  };

  const alerta = () => {
    alert("aduahsdasda");
  };

  return (
    <View
      style={{
        width: "100%",
        height: 450,
        position: "relative",
      }}
    >
      <View
        style={{ width: "100%", alignItems: "center", flexDirection: "row" }}
      >
        <Card
          imageUri="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/de96a427-aecc-41f3-8e1b-3a425360d246/dc2mzcw-69e84cd3-e9ed-4e8a-9162-7a23a84897f6.png"
          onPress={abrirLink}
        ></Card>
        <Card
          imageUri="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/de96a427-aecc-41f3-8e1b-3a425360d246/dc2mzcw-69e84cd3-e9ed-4e8a-9162-7a23a84897f6.png"
          onPress={alerta}
        ></Card>
      </View>
      <View
        style={{ width: "100%", alignItems: "center", flexDirection: "row", bottom: '18%' }}
      >
        <Card
          imageUri="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/de96a427-aecc-41f3-8e1b-3a425360d246/dc2mzcw-69e84cd3-e9ed-4e8a-9162-7a23a84897f6.png"
          onPress={abrirLink}
        ></Card>
        <Card
          imageUri="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/de96a427-aecc-41f3-8e1b-3a425360d246/dc2mzcw-69e84cd3-e9ed-4e8a-9162-7a23a84897f6.png"
          onPress={alerta}
        ></Card>
      </View>
      <View
        style={{ width: "100%", alignItems: "center", flexDirection: "row", bottom: '36%' }}
      >
        <Card
          imageUri="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/de96a427-aecc-41f3-8e1b-3a425360d246/dc2mzcw-69e84cd3-e9ed-4e8a-9162-7a23a84897f6.png"
          onPress={abrirLink}
        ></Card>
        <Card
          imageUri="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/de96a427-aecc-41f3-8e1b-3a425360d246/dc2mzcw-69e84cd3-e9ed-4e8a-9162-7a23a84897f6.png"
          onPress={alerta}
        ></Card>
      </View>
    </View>
  );
}
