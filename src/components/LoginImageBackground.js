//Importação padrão
import { View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
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
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";


//Exportação padrão
export default function LoginImageBackground() {

  //Variável que permite que você navegue entre as telas
  const navigation = useNavigation();

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

        <View style={styles.buttons} >
          {/* Botões para viajar entre as páginas */}
          <Button title="Contact" onPress={() => navigation.navigate("Contact")} buttonStyle={styles.button}/>
          <Button title="About" onPress={() => navigation.navigate("About")} buttonStyle={styles.button}/>
          <Button title="Home" onPress={() => navigation.navigate("Home")} buttonStyle={styles.button}/>
        </View>
      </ImageBackground>
    
  );
}
