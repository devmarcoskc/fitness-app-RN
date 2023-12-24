import { View, Text, StyleSheet, Image, 
TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../styles/GlobalStyles";

const PresentationItem = ({title, subTitle, imageDesc, imgPath, navPath}) => {
  const navigate = useNavigation();

  return (
    <>
    <Text style={styles.titleText}>{title}</Text>
    <Text style={styles.subTitleText}>{subTitle}</Text>
    <TouchableOpacity style={styles.container} onPress={() => navigate.navigate(navPath)}>
      <Image
        source={imgPath}
        style={styles.backgroundImg}
      />
      <View style={styles.backgroundBlack}/>
      <View style={styles.TextsTitleArea}>
        <Text style={styles.imageDesc}>
          {imageDesc}
        </Text>
        <Ionicons
          name="arrow-forward-sharp"
          color="white"
          size={35}
          style={styles.ioconStyle}
        />
      </View>
    </TouchableOpacity>
    </>
  )
};

export default PresentationItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 25,
  },
  titleText: {
    fontSize: 19,
    color: GlobalStyles.colors.orangeRedTitle,
    fontWeight: "bold",
  },
  subTitleText: {
    color: GlobalStyles.colors.orangeSubTitle,
    fontSize: 13
  },
  backgroundImg: {
    height: 200,
    width: "100%",
    borderRadius: 10,
  },
  backgroundBlack: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
  },
  TextsTitleArea: {
    position: "absolute",
    width: 250,
    height: 80,
    left: 14,
    bottom: 0,
  },
  imageDesc: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold"
  }
});