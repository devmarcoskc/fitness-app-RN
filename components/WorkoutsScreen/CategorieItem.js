import { Image, Text, TouchableOpacity, View, 
StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const CategorieItem = ({imgPath, title, navPath, colorBgImg}) => {
  const navigate = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigate.navigate(navPath)}
    >
      <View style={[styles.backgroundBlack, {backgroundColor: colorBgImg}]}/>
      <Image 
        source={imgPath}
        style={styles.backgroundImg}
      />
      <Text style={styles.titleImg}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategorieItem;

const styles = StyleSheet.create({
  container: {
    height: 270,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
    width: 260,
    backgroundColor: GlobalStyles.colors.orangeSubTitle,
  },
  backgroundImg: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  titleImg: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 20,
    left: 20
  },
  backgroundBlack: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
});