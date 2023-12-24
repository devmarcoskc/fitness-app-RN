import { View, TouchableOpacity, Text, StyleSheet, ScrollView, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import WorkoutTitle from "../components/WorkoutScreen/WorkoutTitle";
import IconAndInfoArea from "../components/WorkoutScreen/IconAndInfo";
import Description from "../components/WorkoutScreen/Description";
import SubTitle from "../components/WorkoutScreen/SubTitle";
import ExerciseDescription from "../components/WorkoutScreen/ExerciseDescription";
import RedirectButton from "../components/WorkoutScreen/RedirectButton";

const ChestWorkout = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/flexao.jpg')}/>
        <LinearGradient
          colors={['transparent', 'rgba(10, 10, 10, 1)']}
          style={styles.gradient}
        />
      </View>
      <View style={styles.WorkoutTitleArea}>
        <TouchableOpacity 
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={25} color="white"/>
          <Text style={styles.goBackText}>Voltar</Text>
        </TouchableOpacity>
        <Ionicons/>
        <WorkoutTitle title="Seu treino: Peito, tríceps e ombro"/>
      </View>
      <View style={styles.WorkoutInfosArea}>
        <IconAndInfoArea 
          iconName="alarm-outline"
          description="60 minutos de treino, em média"
        />
        <IconAndInfoArea 
          iconName="thumbs-up-outline"
          description="Ganho de definição e massa muscular"
        />
        <Description/>
        <SubTitle title="Comece agora:"/>
        <ExerciseDescription description="3x (8 a 20) - flexao"/>
        <ExerciseDescription description="3x (8 a 15) - supino reto"/>
        <ExerciseDescription description="3x (8 a 15) - supino inclinado"/>
        <ExerciseDescription description="3x (8 a 15) - peck deck"/>
        <ExerciseDescription description="3x (8 a 15) - crossover"/>
        <ExerciseDescription description="3x (8 a 15) - tríceps barra na polia"/>
        <ExerciseDescription description="3x (8 a 15) - tríceps corda"/>
        <ExerciseDescription description="3x (8 a 12) - desenvolvimento com halter"/>
        <ExerciseDescription description="3x (8 a 15) - elevação lateral"/>
        <SubTitle title="Tire suas dúvidas:"/>
        <View style={styles.RedirectButtonsArea}>
          <RedirectButton 
            text="Procurar exercício" 
            navToPath="ExerciseScreen"
          />
          <RedirectButton 
            text="Procurar receitas" 
            navToPath="NutritionScreen" 
            style={{marginLeft: 15}}
          />
        </View>
      </View>
    </ScrollView>
  )
};

export default ChestWorkout;

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    width: '100%',
    backgroundColor: 'rgb(10, 10, 10)',
  },
  imageContainer: {
    flex: 1,
    height: '70%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%', 
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    top: -90,
    position: 'absolute',
  },
  goBackText: {
    fontSize: 24,
    marginLeft: 5,
    color: 'white'
  },
  WorkoutTitleArea: {
    width: '90%',
    marginLeft: '5%',
  },
  WorkoutInfosArea: {
    width: '90%',
    marginLeft: '5%',
    height: 'auto',
    marginTop: 50
  },
  RedirectButtonsArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  }
});