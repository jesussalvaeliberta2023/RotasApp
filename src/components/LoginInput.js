//Importação padrão
import { View, TextInput } from 'react-native';
//Importação do Style
import styles from '../styles/styleSheet';

//Exportação padrão
export default function LoginInput() {

  return (

      <View style={styles.bodyContainer}>
        {/* Inputs para Logar */}
        <TextInput 
          placeholder='Nome'
          style={styles.logss}
          inputMode='text'
        />

        <TextInput 
          placeholder='Senha'
          keyboardType='numeric'
          secureTextEntry={true}
          style={styles.logss}
        />
      </View>
    
  );
}
