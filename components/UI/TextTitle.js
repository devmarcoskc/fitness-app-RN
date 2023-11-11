import { Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";

const TextTitle = ({title}) => {
  return (
    <Text style={styles.titleStyles}>
        {title}
    </Text>
  )
}

export default TextTitle;

const styles = StyleSheet.create({
  titleStyles: {
    fontSize: 22,
    color: GlobalStyles.colors.orangeRedTitle,
    fontWeight: "bold",
    marginTop: 15,
  }
})