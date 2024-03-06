//Importações
import { View, TextInput } from 'react-native';
import styles from '../styles/styleSheet';

export default function LoginInput() {

  return (

      //Inputs
      <View style={styles.bodyContainer}>
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
