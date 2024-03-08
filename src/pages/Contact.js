//Importação padrão
import { View, TextInput } from "react-native";
import { Button } from "react-native-elements";
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
        <Button title="Enviar" color= 'black' onPress={pressButton} />

      </View>

      <View style={styles.buttons} >
          {/* Botões para viajar entre as páginas */}
          <Button title="About" onPress={() => navigation.navigate("About")} buttonStyle={styles.button}/>
          <Button title="Login" onPress={() => navigation.navigate("Login")} buttonStyle={styles.button}/>
          <Button title="Home" onPress={() => navigation.navigate("Home")} buttonStyle={styles.button}/>
      </View>
    </View>

  );
}
