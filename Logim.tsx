import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tela, setTela] = useState('');


  function validarLogin() {
    setMensagem('');
    if (login === 'admin' && senha === '123456') {
      setTela('mudar');
    }else {
      setMensagem('Login ou Senha incorretos');
    }

  }

 function voltarTela(){
   setTela('');
   setLogin('');
   setSenha('');
   setMensagem('');
 }

if (tela === 'mudar') {
  return (
    <View>
    <Text style={styles.titulo}>Mudou de tela</Text>
    <Button title="Voltar" style={styles.botao} onPress={voltarTela}/>
    </View>
  );
}

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Tela de Login</Text>

    <Text>Login:</Text>
    <TextInput style={styles.input} placeholder="Digite seu login" onChangeText={setLogin}/>

    <Text>Senha:</Text>
    <TextInput style={styles.input} placeholder="Digite sua Senha" onChangeText={setSenha}/>

    <Button title="Entrar" style={styles.botao} onPress={validarLogin}/>

    <Text>{mensagem}</Text>

    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    alignItems: "center",
    backgroundCoor: "#4CAF50",
    flex: 1
  },

  titulo:{
    fontSize: 25,
    color: "#0000CD"
  },

  input:{
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#00000",
    borderRadius: 8,
    backgroundCoor: "#FFFF00",
    margin: 10
  },

  botao: {
  }
})
