import { View, Text, StyleSheet, Image, 
TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PresentationItem = ({title, subTitle, imgPath, navPath}) => {
  const navigate = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigate.navigate(navPath)}>
      <Image
        source={imgPath}
        style={styles.backgroundImg}
      />
      <View style={styles.TextsTitleArea}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subTitleText}>{subTitle}</Text>
        <Ionicons
          name="arrow-forward-sharp"
          color="white"
          size={35}
          style={styles.ioconStyle}
      />
      </View>
    </TouchableOpacity>
  )
};

export default PresentationItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  backgroundImg: {
    height: 200,
    width: "100%",
    borderRadius: 10,
  },
  TextsTitleArea: {
    position: "absolute",
    width: 250,
    height: 100,
    left: 14,
    bottom: 0,
  },
  titleText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  subTitleText: {
    color: "white",
    fontSize: 15
  },
});