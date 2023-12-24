import { Text, StyleSheet, ScrollView } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import { useState } from "react";
import PickerSelectMuscle from "../components/ExerciseScreen/PickerSelectMuscle";
import PickerSelectExercise from "../components/ExerciseScreen/PickerSelectExercise";
import ExerciseItem from "../components/ExerciseScreen/ExerciseItem";
import SubTitle from "../components/UI/SubTitle";

const ExerciseScreen = () => {
  const [muscleSelected, setMuscleSelected] = useState(null);
  const [exerciseSelected, setExerciseSelected] = useState(null);

  const handleChangeValues = (value) => {
    setExerciseSelected(null);
    setMuscleSelected(value);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textTitle}>Está com dúvida em algum?</Text>
      <SubTitle text="Sem problemas! Aqui mostramos como a maioria dos exercícios 
        devem ser feitos, passo a passo! Preencha abaixo os campos"
      />
      <PickerSelectMuscle onChangeValue={handleChangeValues}/>
      {muscleSelected && (
        <>
          <PickerSelectExercise 
            onChangeValue={setExerciseSelected}
            muscleSelected={muscleSelected}
          />
          {exerciseSelected && (
            <ExerciseItem exerciseName={exerciseSelected}/>
          )}
        </>
      )}
    </ScrollView>
  )
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  container: {
    marginLeft: "5%",
    marginTop: 20,
    maxWidth: "90%"
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalStyles.colors.orangeRedTitle
  },
  subTitle: {
    color: GlobalStyles.colors.orangeSubTitle
  },
});