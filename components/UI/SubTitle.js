import { Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";

const SubTitle = ({text}) => {
  return (
    <Text style={styles.subTitle}>
      {text}
    </Text>
  )
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 15,
    color: GlobalStyles.colors.orangeSubTitle
  },
  
})