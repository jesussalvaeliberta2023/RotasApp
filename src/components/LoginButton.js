//Importação padrão
import { View, Button } from 'react-native';
//Importação do Style
import styles from '../styles/styleSheet';
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";

//Exportação padrão
export default function LoginButton() {

  //Função para qaundo apertar no botão, aparecer uma mensagem
  pressButton = () => {
    alert("Uhm essa função ainda não está pronta :' (")
  }

  //Variável que permite que você navegue entre as telas
  const navigation = useNavigation();
  
  // Retorna e Renderiza tudo o que está dentro dele
  return (

      <View style={styles.bodyContainer}>
        {/* Botão para executar uma função */}
        <Button
          title='Entrar'
          color= 'blue'
          onPress={pressButton}
        />   

      <Button title="About" onPress={() => navigation.navigate("About")} color= 'black' style={styles.buttons}/>
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} color= 'black' style={styles.buttons}/>
      <Button title="Home" onPress={() => navigation.navigate("Home")} color= 'black' style={styles.buttons}/>
      </View>
    
  );
}
