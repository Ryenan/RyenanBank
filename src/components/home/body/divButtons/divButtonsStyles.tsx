import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Styles = StyleSheet.create({
  buttons: {
    paddingHorizontal: 15,
    width: width * 0.25,
    gap: 35,
  },

  Button: {
    height: height * 0.08,
    width: width * 0.17,
    borderRadius: 40,
    borderColor: "#35c23c",
    borderWidth: 1,
    gap: 15,
    alignItems: 'center',
    paddingTop: 5
  },

  image: {
    width: 55,
    height: 55,
  },

  titleIcon: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 11,
  },
});
