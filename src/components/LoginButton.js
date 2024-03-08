//Importação padrão
import { View, Button } from 'react-native';
//Importação do Style
import styles from '../styles/styleSheet';

//Exportação padrão
export default function LoginButton() {

  //Função para qaundo apertar no botão, aparecer uma mensagem
  pressButton = () => {
    alert("Uhm essa função ainda não está pronta :' (")
  }
  
  // Retorna e Renderiza tudo o que está dentro dele
  return (

      <View style={styles.bodyContainer}>
        {/* Botão para executar uma função */}
        <Button
          title='Entrar'
          color= 'blue'
          onPress={pressButton}
        /> 
      </View>
    
  );
}
