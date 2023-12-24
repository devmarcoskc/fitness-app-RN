import { Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";
import {Ionicons} from '@expo/vector-icons';

const HeaderTitle = ({text}) => {
  return (
    <Text style={styles.title}>
      {text}

    </Text>
  )
};

export default HeaderTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: GlobalStyles.colors.orangeRedTitle,
    fontWeight: 'bold',
    marginTop: 10,
  },
  icon: {
    marginLeft: 10,
  }
})