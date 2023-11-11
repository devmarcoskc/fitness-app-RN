import RNPickerSelect from "react-native-picker-select";
import { Text, StyleSheet } from "react-native";
import Label from "./Label";
import { GlobalStyles } from "../../styles/GlobalStyles";

const PickerSelectMuscle = ({onChangeValue}) => {
  return (
    <>
      <Label text="Selecione o músculo"/>
      <RNPickerSelect
        placeholder={{label: "Clique para ver as opções", value:null}}
        onValueChange={(value) => onChangeValue(value)}
        items={[
          {label: "Costas", value:"Costas"},
          {label: "Bíceps", value:"Bíceps"},
          {label: "Pernas", value:"Pernas"},
          {label: "Peito", value:"Peito"},
          {label: "Ombro", value:"Ombro"},
          {label: "Tríceps", value:"Tríceps"},
          {label: "Abdominal", value:"Abdominal"},
        ]}
        style={customPickerStyles}
        useNativeAndroidPickerStyle={false}
      />
    </>
  )
};

export default PickerSelectMuscle;

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