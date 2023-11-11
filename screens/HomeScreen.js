import { View, Text, StyleSheet, Image,
ScrollView } from "react-native";
import PresentationItem from "../components/HomeScreen/PresentationItem";
import { GlobalStyles } from "../styles/GlobalStyles";
import {Ionicons} from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <Text style={styles.titleScreen}>
          BEM-VINDO!
          <Ionicons 
            style={styles.iconStyle} 
            name="ios-checkmark-circle" 
            size={24} 
            color={GlobalStyles.colors.orangeRedTitle} 
          />
        </Text>
        <PresentationItem 
          title="Encontre seu exercício"
          subTitle="Está com dúvida em algum exercício ? Encontre aqui os passos para como fazer do jeito certo"
          navPath="ExerciseScreen"
          imgPath={require("../assets/images/exercise-image.png")}
        />
        <PresentationItem 
          title="Dicas de alimentação"
          subTitle="Oferecemos sugestões de alimentação com base nos seus objetivos"
          navPath="ExerciseScreen"
          imgPath={require("../assets/images/foodImg.png")}
        />
        <PresentationItem 
          title="Veja nossos treinos"
          subTitle="Oferecemos treinos completos para cada músculo com base em seus objetivos"
          navPath="ExerciseScreen"
          imgPath={require("../assets/images/workoutImg.jpg")}
        />
      </ScrollView>
    </View>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  innerContainer: {
    width: "90%",
    height: "100%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  titleScreen: {
    fontSize: 22,
    color: GlobalStyles.colors.orangeRedTitle,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  subTitleScreen: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    color: GlobalStyles.colors.orangeSubTitle
  },
  iconStyle: {
    marginLeft: 10
  }
});