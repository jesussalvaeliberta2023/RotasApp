//Importação padrão
import { View, ImageBackground } from 'react-native';
//Importação do Style
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

//Exportação padrão
export default function LoginImageBackground() {

  // Retorna e Renderiza tudo o que está dentro dele
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
