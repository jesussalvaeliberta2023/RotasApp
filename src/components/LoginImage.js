//Importações
import { View, Image } from 'react-native';
import styles from '../styles/styleSheet';
//Importação Imagem
import Logo from '../assets/images/Logo.png';


export default function LoginImage() {

  return (
    //My Logo
    <View style={styles.headerContainer}>
      <Image
          source={Logo}
          style={styles.logo}
          resizeMode='cover'
      />
    </View>

  );
}