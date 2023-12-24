import React from "react";
import { Modal, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";

const RecipeModal = ({ recipeItem, visible, handleCloseModal }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleCloseModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.imageArea}>
          <TouchableOpacity style={styles.closeModal} onPress={handleCloseModal}>
            <Ionicons size={25} color="white" name="arrow-back-outline"/>
            <Text style={styles.textBack}>Voltar</Text>
          </TouchableOpacity>
          <Image style={styles.image} source={recipeItem.imgPath}/>
        </View>
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.itemTitle}>{recipeItem.name}</Text>
          <Text style={styles.itemDesc}>
           {recipeItem.desc}
          </Text>
          <Text style={styles.ingredientsTitle}>Ingredientes:</Text>
          {recipeItem.ingredients.map((ingredient) => (
            <Text key={ingredient} style={styles.stepsDesc}>- {ingredient}</Text>
          ))}
          <Text style={styles.ingredientsTitle}>Modo de preparo:</Text>
          {recipeItem.preparationMethod.map((preparation) => (
            <Text key={preparation} style={styles.stepsDesc}>- {preparation}</Text>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
  },
  imageArea: {
    height: '35%',
    width: '100%',
    backgroundColor: 'blue'
  },
  closeModal: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconGoBack: {
    marginRight: 5,
  },
  textBack: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  image: {
    height: '100%',
    width: '100%',
    zIndex: 1
  },
  contentContainer: {
    marginLeft: '5%',
    width: '90%',
    marginBottom: 15
  },
  itemTitle: {
    color: GlobalStyles.colors.orangeRedTitle,
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center'
  },
  itemDesc: {
    fontSize: 14,
    marginTop: 5,
    color: GlobalStyles.colors.orangeDescription
  },
  ingredientsTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: GlobalStyles.colors.orangeRedTitle,
    marginTop: 5,
  },
  stepsDesc: {
    fontSize: 15,
    marginTop: 5,
    color: GlobalStyles.colors.orangeDescription
  }
});

export default RecipeModal;
