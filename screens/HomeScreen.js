import { View, Text, StyleSheet,
ScrollView } from "react-native";
import PresentationItem from "../components/HomeScreen/PresentationItem";
import { GlobalStyles } from "../styles/GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <View style={styles.logoContainer}>
        <View style={styles.imageLogoArea}>
          <Text style={styles.iconText}>Seja</Text>
          <Text style={styles.iconText}>Fit</Text>
        </View>
        </View>
        <Text style={styles.titleScreen}>
          BEM-VINDO!
        </Text>
        <PresentationItem 
          title="Encontre seu exercício"
          subTitle="Está com dúvidas em algum exercício? Veja aqui o passo a passo de como fazer da maneira correta."
          navPath="ExerciseScreen"
          imageDesc="Mais de 30 exercícios"
          imgPath={require("../assets/images/exercise-image.png")}
        />
        <PresentationItem 
          title="Nossas receitas"
          subTitle="Oferecemos nossas dicas de receitas para o seu pré-treino e pós-treino."
          navPath="NutritionScreen"
          imageDesc="Mais de 5 receitas"
          imgPath={require("../assets/images/foodImg.png")}
        />
        <PresentationItem 
          title="Veja nossos treinos"
          subTitle="Oferecemos sugestões de treinos completos para cada músculo."
          navPath="WorkoutsScreen"
          imageDesc="Treinos completos!"
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
  logoContainer: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  imageLogoArea: {
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: GlobalStyles.colors.orangeSubTitle,
    borderRadius: 40,
    justifyContent: 'center'
  },
  iconText: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'italic'
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