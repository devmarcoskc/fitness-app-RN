import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RedirectButton = ({text, style, navToPath}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate(navToPath)}
      style={[styles.containerStyle, style]}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  )
};

export default RedirectButton;

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 7,
  },
})