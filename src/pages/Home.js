//Importações Padrão
import { View, ImageBackground, Text, Button } from "react-native";
import { styles } from "../styles/styleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    //Imagem de fundo
    <ImageBackground
      source={require("../styles/Fundo.jpg")}
      style={styles.fundo}
    >

      <View style={styles.container}>
        <Text style={styles.hey}>Hey, this is the home page</Text>
      </View>

      <Button title="About" onPress={() => navigation.navigate("About")} color= 'black' />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} color= 'black' />
      <Button title="Login" onPress={() => navigation.navigate("Login")} color= 'black' />
    </ImageBackground>
  );
}
