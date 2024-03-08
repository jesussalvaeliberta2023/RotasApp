//Importações Padrão
import { View, TextInput, Button } from "react-native";
import { styles } from "../styles/styleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";


export default function Contact() {

  pressButton = () => {
    alert("Uhm essa função ainda não está pronta :' (")
  }

  const navigation = useNavigation();

  return (
    //Imagem de fundo
    
      <View style={styles.container}>
        <View style={styles.corpo}>

        <TextInput 
          placeholder='Nome'
          style={styles.inputs}
          inputMode='text'
        />
        <TextInput 
          placeholder='E-mail'
          style={styles.inputs}
          inputMode='text'
        />
        <TextInput 
          placeholder='Mensagem de reclamação'
          style={styles.inputs}
          inputMode='text'
        />

        <Button
          title='Entrar'
          color= 'black'
          onPress={pressButton}
        />
        
        </View>
      </View>
  
  );
}
