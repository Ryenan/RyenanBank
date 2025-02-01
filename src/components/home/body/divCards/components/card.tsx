import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

interface Card {
  imageUri?: string;
  text?: string;
  onPress?: () => void;
}

export const Card: React.FC<Card> = ({ imageUri, text, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        {imageUri && <Image />}
        {text && <Text>{text}</Text>}
      </TouchableOpacity>
    </View>
  );
};
