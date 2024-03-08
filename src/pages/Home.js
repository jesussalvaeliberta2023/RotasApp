//Importação padrão
import { View, ImageBackground, Text, Button } from "react-native";
//Importação do Style
import { styles } from "../styles/styleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";
//Importação Imagem
import FundoH from '../assets/images/FundoH.jpg'

//Exportação padrão
export default function Home() {

  const navigation = useNavigation();

  // Retorna e Renderiza tudo o que está dentro dele
  return (

    //Imagem de fundo Home
    <ImageBackground
      source={FundoH}
      style={styles.fundo}
    >

      <View style={styles.container}>
        {/* Texto de localização */}
        <Text style={styles.hey}>Hey there! This is the home page</Text>
      </View>

      {/* Botoẽs para transitar entre as páginas */}
      <Button title="About" onPress={() => navigation.navigate("About")} color= 'black' style={styles.buttons}/>
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} color= 'black' style={styles.buttons}/>
      <Button title="Login" onPress={() => navigation.navigate("Login")} color= 'black' style={styles.buttons}/>
    </ImageBackground>
    
  );
}
