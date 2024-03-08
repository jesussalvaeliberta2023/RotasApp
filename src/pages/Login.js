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

  // Retorna e Renderiza tudo o que está dentro dele
  return (

    <View style={styles.container}>
      {/* Chamando a tela de Login */}
      <LoginBack />
      <Button title="About" onPress={() => navigation.navigate("About")} color= 'black' />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} color= 'black' />
      <Button title="Home" onPress={() => navigation.navigate("Home")} color= 'black' />
    </View>

  );
}
