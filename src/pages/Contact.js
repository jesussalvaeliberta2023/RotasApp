//Importação padrão
import { View, TextInput, Button } from "react-native";
//Importação do Style
import { styles } from "../styles/styleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";

//Exportação padrão
export default function Contact() {

  //Função para qaundo apertar no botão, aparecer uma mensagem
  pressButton = () => {
    alert("Uhm essa função ainda não está pronta :' (");
  };

  //Variável que permite que você navegue entre as telas
  const navigation = useNavigation();

  // Retorna e Renderiza tudo o que está dentro dele
  return (

    <View style={styles.container}>
      <View style={styles.corpo}>

        {/* Inputs para entrar em contato */}
        <TextInput 
          placeholder="Nome" 
          style={styles.inputs} 
          inputMode="text" 
        />
        <TextInput
          placeholder="E-mail"
          style={styles.inputs}
          inputMode="text"
        />
        <TextInput
          placeholder="Mensagem de reclamação"
          style={styles.inputs}
          inputMode="text"
        />

        {/* Botão para executar uma função */}
        <Button title="Enviar" color="blue" onPress={pressButton} />

        <Button title="About" onPress={() => navigation.navigate("About")} color= 'black' style={styles.buttons}/>
        <Button title="Login" onPress={() => navigation.navigate("Login")} color= 'black' style={styles.buttons}/>
        <Button title="Home" onPress={() => navigation.navigate("Home")} color= 'black' style={styles.buttons}/>
      </View>
    </View>

  );
}
