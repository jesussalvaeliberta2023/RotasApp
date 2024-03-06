//Importações Padrão
import { View, TextInput } from "react-native";
import { styles } from "../styles/styleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";


export default function Contact() {
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
  
        </View>
      </View>
  
  );
}
