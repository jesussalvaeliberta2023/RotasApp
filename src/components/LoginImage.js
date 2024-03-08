//Importação padrão
import { View, Image } from 'react-native';
//Importação do Style
import styles from '../styles/styleSheet';
//Importação Imagem
import Logo from '../assets/images/Logo.png';

//Exportação padrão
export default function LoginImage() {

  return (
    
    <View style={styles.headerContainer}>
      {/* Logo */}
      <Image
          source={Logo}
          style={styles.logo}
          resizeMode='cover'
      />
    </View>

  );
}