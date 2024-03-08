//Importação padrão
import { View } from "react-native";
//Importação do Style
import styles from "../styles/styleSheet";
//Importações de Components
import LoginBack from "../components/LoginImageBackground";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";


//Exportação padrão
export default function Login() {

  //Variável que permite que você navegue entre as telas
  const navigation = useNavigation();

  return (

    <View style={styles.container}>
      {/* Chamando a tela de Login */}
      <LoginBack />
    </View>

  );
}
