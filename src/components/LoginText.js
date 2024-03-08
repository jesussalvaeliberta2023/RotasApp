//Importação padrão
import { Text, View } from 'react-native';
//Importação do Style
import styles from '../styles/styleSheet';

//Exportação padrão
export default function LoginText() {

  // Retorna e Renderiza tudo o que está dentro dele
  return (

      <View style={styles.bodyContainer}>
        {/* Texto indicatório para fazer login */}
        <Text style={styles.myName} >Faça seu login pra entrar</Text>
      </View>
    
  );
}
