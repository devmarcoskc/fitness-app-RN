import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobalStyles } from './styles/GlobalStyles';
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from './screens/HomeScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import WorkoutsScreen from './screens/WorkoutsScreen';
import BackAndBiceps from './screens/BackAndBiceps';
import ChestWorkout from './screens/ChestWorkout';
import LegsWorkout from './screens/LegsWorkout';
import AbdominalWorkout from './screens/Abdominal';
import NutritionScreen from './screens/NutritionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='HomeScreen'
          screenOptions={{
            contentStyle: {
              backgroundColor: 'white'
            },
            headerStyle: {
              backgroundColor: GlobalStyles.colors.orangeSubTitle
            },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              title: "Início",
              headerRight: () => {
                return <Ionicons name='home-outline' size={25} color="white"/>
              }
            }}
          />
          <Stack.Screen
            name='ExerciseScreen'
            component={ExerciseScreen}
            options={{
              title:"Exercícios",
            }}
          />
          <Stack.Screen
            name='NutritionScreen'
            component={NutritionScreen}
            options={{
              title:"Nossas receitas",
            }}
          />
          <Stack.Screen
            name='WorkoutsScreen'
            component={WorkoutsScreen}
            options={{
              title:"Nossos Treinos",
            }}
          />
          <Stack.Screen
            name='BackWorkout'
            component={BackAndBiceps}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='ChestWorkout'
            component={ChestWorkout}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='LegsWorkout'
            component={LegsWorkout}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='AbdominalWorkout'
            component={AbdominalWorkout}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}