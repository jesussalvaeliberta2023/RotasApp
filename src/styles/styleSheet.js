import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bodyContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '100',
  },

  corpo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fundo: {
    width:'100%',
    height:'100%',
  },

  obra: {
  borderRadius: 300,
  width: 300,
  height: 300,
  },

  descricao: {
    justifyContent: 'center',
    width: 300,
    height: 300,
  },

  hey: {
    flex: 1,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },

  inputs: {
    backgroundColor: '#00000000',
    borderWidth: 1,
    borderRadius: 3 ,
    height: 60,
    width: 400,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 15,
  },

  headerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 70,
  },

  welcome: {
    color: '#0C052B',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },

  copyright: {
    color: '#0C052B',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },

  logo: {
    width: 238,
    height: 50,
  },

  myName: {
    color: '#0C052B',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 20,
  },

  logss: {
    backgroundColor: '#BDBDBD00',
    borderWidth: 1,
    borderRadius: 3 ,
    height: 75,
    width: 300,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 15,
  },

});

export default styles;