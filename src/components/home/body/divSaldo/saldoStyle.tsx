import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 25
  },

  saldo: {
    fontWeight: "bold",
    color: "#35c23c",
  },
});
