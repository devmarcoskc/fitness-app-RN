import { Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";

const HeaderSubtitle = ({text}) => {
  return (
    <Text style={styles.subtitle}>
      {text}
    </Text>
  )
};

export default HeaderSubtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 15,
    color: GlobalStyles.colors.orangeDescription
  }
})