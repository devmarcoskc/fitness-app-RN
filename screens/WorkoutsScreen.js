import { View, Text, StyleSheet, ScrollView } from "react-native";
import TextTitle from "../components/UI/TextTitle";
import SubTitle from "../components/UI/SubTitle";
import { GlobalStyles } from "../styles/GlobalStyles";
import CategorieItem from "../components/WorkoutsScreen/CategorieItem";
import { Ionicons } from "@expo/vector-icons";
import ProgressItem from "../components/WorkoutsScreen/ProgressItem";

const WorkoutsScreen = () => {
  return (
    <View style={styles.container}>
      <TextTitle title="Olá, não perca mais tempo!"/>
      <SubTitle text="Os nossos treinos são completos para cada músculo, 
        independente de seu nível! Veja nossa lista abaixo:"
      />
      <Text style={styles.categoriesTitle}>
        Selecione
        <Ionicons name="arrow-forward-outline" size={25}/>
      </Text>
      <ScrollView 
        style={styles.categoriesContainer}
        horizontal
      >
        <CategorieItem 
          title="Costas e bíceps"
          imgPath={require("../assets/images/biceps-bg.png")}
          navPath="BackWorkout"
          colorBgImg="rgba(128,128,128, 0.17)"
        />
        <CategorieItem 
          title="Peito, tríceps e ombro"
          imgPath={require("../assets/images/peito-bg.png")}
          navPath="ChestWorkout"
          colorBgImg="rgba(72, 209, 204, 0.6)"
        />
        <CategorieItem 
          title="Pernas completo"
          imgPath={require("../assets/images/agachamento-bg.png")}
          navPath="LegsWorkout"
          colorBgImg="rgba(248,248,255, 0.8)"
        />
        <CategorieItem 
          title="Abdominal"
          imgPath={require("../assets/images/abdominal-bg.png")}
          navPath="AbdominalWorkout"
          colorBgImg="rgba(255,182,193, 1)"
        />
      </ScrollView>
      <ProgressItem/>
    </View>
  )
};

export default WorkoutsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
    marginTop: 20,
    maxWidth: '90%'
  },
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  categoriesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    justifyContent: "center",
    marginTop: 20,
    color: GlobalStyles.colors.orangeRedTitle
  },
});