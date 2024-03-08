//Importações Padrão
import { View, ImageBackground } from 'react-native';
import styles from '../styles/styleSheet';
//Importações de Components
import LoginButton from '../components/LoginButton';
import LoginImage from '../components/LoginImage';
import LoginInput from '../components/LoginInput';
import LoginText from '../components/LoginTH';
import LoginTextt from '../components/LoginText';
import LoginTexttt from '../components/LoginTF';
//Importação Imagem
import FundoL from '../assets/images/FundoL.png'

export default function LoginImageBackground() {
  return (

      //Imagem de fundo
      <ImageBackground
        source={FundoL}
        style={styles.fundo}
      >
        <View style={styles.container}>
          {/* Meu body/Outros Components */}
          <LoginImage/>
          <LoginText/>
          <LoginTextt/>
          <LoginInput/>
          <LoginButton/>
          <LoginTexttt/>
        </View>
      </ImageBackground>
    
  );
}
