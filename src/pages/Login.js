//Importações Padrão
import { View } from "react-native";
import styles from "../styles/styleSheet";
//Importações de Components
import LoginBack from "../components/LoginImageBackground";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();


  return (
    //My background
    <View style={styles.container}>
      <LoginBack />
    </View>
  );
}
