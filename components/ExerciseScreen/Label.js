import { Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";

const Label = ({text}) => {
  return (
    <Text style={styles.selectTitle}>
      {text}
    </Text>
  )
}

export default Label;

const styles = StyleSheet.create({
  selectTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500",
    color: GlobalStyles.colors.orangeRedTitle
  },
})