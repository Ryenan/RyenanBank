import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 50,
  },

  body: {
    textAlign: "center",
    alignItems: "center",
    width: width * 1,
  },

  sec1: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: width * 1,
    marginTop: 20,
    boxShadow: "#35c23c -10px -30px 5px -30px inset, rgba(0, 0, 0, 0.3) 0px -18px 36px -36px inset",
    height: height * 0.16,
    padding: 5,
  },

  sec1View: {
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
  },

  image: {
    width: 100,
    height: 100,
  },

  miniImage: {
    width: 50,
    height: 50,
  },

  title: {
    fontSize: 21,
  },

  textCenter: {
    textAlign: "center",
  },
});
