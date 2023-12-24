import { Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";

const WorkoutTitle = ({title}) => {
  return (
    <Text style={styles.textTitle}>{title}</Text>
  )
};

export default WorkoutTitle;

const styles = StyleSheet.create({
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    position: 'absolute',
    top: -40
  },
})