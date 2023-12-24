import { View, Text, Modal, Image, TouchableOpacity, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";
import {Ionicons} from '@expo/vector-icons';
import RecipeModal from "./RecipeModal";
import { useState } from "react";

const RecipesItem = ({recipeItem}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleOpenModal = () => {
    setModalIsVisible(true);
  }

  const handleCloseModal = () => {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={recipeItem.imgPath}/>
      <View style={styles.titleAndIcon}>
        <Text style={styles.recipeTitle}>
          {recipeItem.name}
        </Text>
        <Ionicons 
          size={22} 
          name="restaurant-outline" 
          color="green"
        />
      </View>
      <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={handleOpenModal}
      >
        <Text style={styles.textButton}>Ver receita</Text>
      </TouchableOpacity>

      <RecipeModal recipeItem={recipeItem} visible={modalIsVisible} handleCloseModal={handleCloseModal}/>
    </View>
  )
}

export default RecipesItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginRight: 20,
  },
  image: {
    height: 200,
    width: 250,
    borderRadius: 10,
  },
  titleAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 230,
    marginTop: 5,
  },
  recipeTitle: {
    color: GlobalStyles.colors.orangeDescription,
    fontSize: 15,
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: 250,
    height: 40,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.orangeDescription,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  textButton: {
    fontSize: 17,
    color: 'white',
  }
})