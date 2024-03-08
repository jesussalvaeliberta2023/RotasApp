//Importação padrão
import { Text, View } from 'react-native';
//Importação do Style
import styles from '../styles/styleSheet';

//Exportação padrão
export default function LoginText() {

  return (

      <View style={styles.bodyContainer}>
        {/* Texto indicatório para fazer login */}
        <Text style={styles.myName} >Faça seu login pra entrar</Text>
      </View>
    
  );
}
