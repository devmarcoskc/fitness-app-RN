import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobalStyles } from './styles/GlobalStyles';
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from './screens/HomeScreen';
import ExerciseScreen from './screens/ExerciseScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
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
            headerRight: (() => {
              return <Ionicons
                name="barbell-outline"
                size={30}
                color='white'
              />
            })
          }}
        >
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              title: "Início"
            }}
          />
          <Stack.Screen
            name='ExerciseScreen'
            component={ExerciseScreen}
            options={{
              title:"Exercício",
            }}
          />
          <Stack.Screen
            name='NutritionScreen'
            component={HomeScreen}
            options={{
              title:"Bem-vindo!",
              headerTintColor: GlobalStyles.colors.orangeRedTitle
            }}
          />
          <Stack.Screen
            name='WorkoutsScreen'
            component={HomeScreen}
            options={{
              title:"Bem-vindo!",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
