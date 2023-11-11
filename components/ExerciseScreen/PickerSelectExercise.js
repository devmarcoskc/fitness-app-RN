import RNPickerSelect from "react-native-picker-select";
import { Text, StyleSheet } from "react-native";
import Label from "./Label";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { SwitchExerciseToShow } from "../../utils/switchExerciseToShow";

const PickerSelectExercise = ({onChangeValue, muscleSelected}) => {
  const render = SwitchExerciseToShow(muscleSelected);

  return (
    <>
      <Label text="Selecione o exercício"/>
      <RNPickerSelect
        placeholder={{label: "Clique para ver as opções", value:null}}
        onValueChange={(value) => onChangeValue(value)}
        items={render}
        style={customPickerStyles}
        useNativeAndroidPickerStyle={false}
      />
    </>
  )
};

export default PickerSelectExercise;

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.orangeRedTitle,
    borderRadius: 8,
    color: GlobalStyles.colors.orangeRedTitle,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});