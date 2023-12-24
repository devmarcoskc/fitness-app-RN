import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconAndInfoArea = ({iconName, description}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={25} color="white"/>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
};

export default IconAndInfoArea;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    fontSize: 17,
    color: 'white',
    marginLeft: 10,
  }
})