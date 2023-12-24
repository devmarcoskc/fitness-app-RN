import { Text, StyleSheet } from "react-native";

const Description = () => {
  return (
    <Text style={styles.description}>
      Esse treino serve para todos níveis, seja você iniciente ou não.
      As repetições e séries são postas abaixo como base, que serve tanto para hipertrofia,
      quanto para resistência. Se você quiser fazer mais ou menos, fique a vontade!
    </Text>
  )
};

export default Description;

const styles = StyleSheet.create({
  description: {
    marginTop: 10,
    fontSize: 16,
    color: '#787878'
  }
})