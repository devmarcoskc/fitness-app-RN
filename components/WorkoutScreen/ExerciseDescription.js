import { Text, StyleSheet } from "react-native";

const ExerciseDescription = ({description}) => {
  return (
    <Text style={styles.description}>{description}</Text>
  )
};

export default ExerciseDescription;

const styles = StyleSheet.create({
  description: {
    marginTop: 5,
    fontSize: 16,
    color: '#E0E0E0'
  }
})