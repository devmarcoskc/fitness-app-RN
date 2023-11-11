import { View, Text, StyleSheet,
Image } from "react-native";
import { DataExercise } from "../../utils/dataExercises";
import { GlobalStyles } from "../../styles/GlobalStyles";

const ExerciseItem = ({exerciseName}) => {
  const ExerciseItem = DataExercise.filter((exercise) => {
    return exercise.name === exerciseName;
  });

  return (
    ExerciseItem.map((exercise) => (
      <View key={exercise.name} style={styles.container}>
        <Image
          source={{uri:'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley-1.gif'}}
          style={styles.gifStyle}
        />
        {exercise.steps.map((step, index) => (
          <Text 
            style={styles.stepTextStyle}
            key={exercise.name+index}
          >
            {index + 1} - {step}
          </Text>
        ))}
      </View>
    ))
  )
};

export default ExerciseItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    marginTop: 20,
  },
  gifStyle: {
    height: 250,
    width: "100%",
    marginVertical: 10
  },
  stepTextStyle: {
    marginBottom: 5,
    color: GlobalStyles.colors.orangeDescription,
  }
})