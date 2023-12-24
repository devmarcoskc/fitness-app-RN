import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";

const ProgressItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TitleAndIcon}>
        <Text style={styles.progressTitle}>Continue com o progresso!</Text>
        <Ionicons name="star-outline" size={22} color="white"/>
      </View>
      <Text style={styles.subTitle}>Fazendo exercício físico, você já está entre os 48% dos brasileiros que praticam atividade física.</Text>
    </View>
  )
};

export default ProgressItem;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 120,
    borderRadius: 10,
    padding: 20,
    marginBottom: 25,
    backgroundColor: GlobalStyles.colors.orangeSubTitle
  },
  TitleAndIcon: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
  progressTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  subTitle: {
    color: "white",
    fontSize: 15,
    marginTop: 5
  }
})