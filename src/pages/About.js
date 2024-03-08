//Importação padrão
import { View, Text, Image } from "react-native";
//Importação do Style
import { styles } from "../styles/styleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";
//Importação Imagem
import Quadro from '../assets/images/Quadro.jpg'

//Exportação padrão
export default function About() {

  //Variável que permite que você navegue entre as telas
  const navigation = useNavigation();

  // Retorna e Renderiza tudo o que está dentro dele
  return (
    
      <View style={styles.container}>
        <View style={styles.corpo}>

            {/* Imagem da obra "A Noite Estrelada" */}
            <Image
                source={Quadro}
                style={styles.obra}
                resizeMode='cover'
            />

            <View style={styles.descricao}>
              {/* Descrissão "A Noite Estrelada" */}
              <Text style={{textAlign: 'justify'}}> "A Noite Estrelada" é a obra mais famosa de Vincent Van Gogh, 
                criada em 1889. A pintura retrata uma paisagem noturna estonteante, onde o céu noturno é o 
                protagonista indiscutível. Van Gogh habilmente utiliza pinceladas expressivas e cores 
                vibrantes para capturar a atmosfera única de uma noite estrelada.
              </Text>
            </View>
            
        </View>
      </View>
  
  );
}
