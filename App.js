// Importações Stack Navigation
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./src/pages/Home"
import About from "./src/pages/About"
import Contact from "./src/pages/Contact"
import Login from "./src/pages/Login"

// Criando uma instancia do Stack Navigator
// Isso nos permite utilizar comandos para definir a navegação de aplicação
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer> = Responsável para envolver as rotas da navegação
    <NavigationContainer>
      {/* <Stack.Navigator> = Indica a navegação em formas de pilha */}
      <Stack.Navigator>
        {/* <Stack.Screen/> = Visualizar as paginas*/}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
