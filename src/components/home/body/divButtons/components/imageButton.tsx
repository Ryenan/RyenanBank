import { TouchableOpacity, Image, Text } from "react-native";
import { Styles } from "../divButtonsStyles";

interface ImageButtonsProps {
  imageUri?: string;
  onPress?: () => void;
  text?: string;
}

export const ImageButton: React.FC<ImageButtonsProps> = ({
  imageUri,
  onPress,
  text,
}) => {
  return (
    <TouchableOpacity style={Styles.Button} onPress={onPress}>
      <Image source={{ uri: imageUri }} style={Styles.image}></Image>
      <Text style={Styles.titleIcon}>{text}</Text>
    </TouchableOpacity>
  );
};
