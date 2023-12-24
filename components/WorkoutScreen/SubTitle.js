import { Text, StyleSheet } from "react-native";

const SubTitle = ({title}) => {
  return (
    <Text style={styles.titleStyles}>
      {title}
    </Text>
  )
};

export default SubTitle;

const styles = StyleSheet.create({
  titleStyles: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  }
})