import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export default StyleSheet.create({
  map: {
    alignSelf: "stretch",
    marginVertical: 20,
    // height: 100,
  },
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  cell: {
    borderWidth: 1,
    borderColor: colors.darkgrey,
    borderRadius: 5,
    flex: 1,
    aspectRatio: 1,
    margin: 3,
    maxWidth: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});
