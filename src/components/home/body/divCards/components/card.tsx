import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

interface Card {
  imageUri?: string;
  text?: string;
  onPress?: () => void;
}

export const Card: React.FC<Card> = ({ imageUri, text, onPress }) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
        {text && <Text>{text}</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 10,
    width: "50%",
  },

  button: {
    width: "100%",
    height: "65%",
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    borderRadius: 5,
    boxShadow:
      "#247c28 0px 0px 0px 2px, #35c23c 0px 4px 6px -1px, #247c28 0px 1px 0px inset",
  },
});
