//Importações
import { View, Image } from 'react-native';
import styles from '../styles/styleSheet';

export default function LoginImage() {

  return (
    //My Logo
    <View style={styles.headerContainer}>
      <Image
          source={require('../styles/Logo.png')}
          style={styles.logo}
          resizeMode='cover'
      />
    </View>

  );
}