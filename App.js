import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.viewer}>
      <Text style={styles.titulo}>
        Meu Perfil Profissional
      </Text>

      <Image 
          source={{uri: 'https://avatars.githubusercontent.com/u/100734683?v=4'}}
          style={{width: 150, height: 150, marginTop: 10}}
        />
 
      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Dados Pessoais:</Text>
        {'\n'}
        Nome: Laryssa Damaceno Lisboa
        {'\n'}
        Data de nascimento: 22/04/2002
        {'\n'}
        Nacionalidade: Brasileira
        {'\n'}
        Endereço: Rua Antônio dos Santos, 155 - Jardim Santa Maria, Guarujá - SP
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Formação:</Text>
        {'\n'}
        Técnico em Secretariado - ETEC Alberto Santos Dumont 
        {'\n'}
        Cursando Sistemas para Internet - FATEC Baixada Santista Rubens Lara
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Experiência profissional:</Text>
        {'\n'}
        Recepcionista - Teatro Procópio Ferreira
        {'\n'}
        Estagiária Equipe Web (Comunicação/Social Media) - Fatec BS Rubens Lara
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Projetos:</Text>
        {'\n'}
        Projetos desenvolvidos em repositório no GitHub (github.com/laryssalisboa)
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  viewer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#8AA399',
    padding: 8,
  },
  titulo: {
    margin: 18,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFFFFF'
  },
  subtitulos: {
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF'
  },
  conteudo: {
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
});