import { ScrollView, StyleSheet } from "react-native";
import HeaderTitle from "../components/NutritionScreen/HeaderTitle";
import RecipesItem from "../components/NutritionScreen/RecipesItem";
import HeaderSubtitle from "../components/NutritionScreen/HeaderSubTitle";
import { preWorkout, postWorkout } from "../utils/dataRecipes";

const NutritionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeaderTitle text="Pré-treino"/>
      <HeaderSubtitle text="Alimentação pré-treino equilibrada forcene combustível necessário para o corpo durante o treino!"/>
      <ScrollView style={styles.recipesList} horizontal>
        {preWorkout.map((recipe) => (
          <RecipesItem key={recipe.name} recipeItem={recipe}/>
        ))}
      </ScrollView>
      <HeaderTitle text="Pós-treino"/>
      <HeaderSubtitle text="A alimentação pós-treino desempenha um papel crucial na recuperação muscular, reposição de nutrientes e maximização dos benefícios do exercício!"/>
      <ScrollView style={styles.recipesList} horizontal>
        {postWorkout.map((recipe) => (
          <RecipesItem key={recipe.name} recipeItem={recipe}/>
        ))}
      </ScrollView>
    </ScrollView>
  )
};

export default NutritionScreen;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '90%',
    marginLeft: '5%',
  },
  recipesList: {
    flexDirection: 'row',
    height: 'auto',
    width: 'auto',
    marginTop: 10,
    marginBottom: 15
  }
})