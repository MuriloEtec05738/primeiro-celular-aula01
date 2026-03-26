import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';

export default function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tela, setTela] = useState('');

  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [curso, setCurso] = useState('');

  const [indiceEdicao, setIndiceEdicao] = useState(null);

  function validarLogin() {
    setMensagem('');
    if (login === "admin" && senha === "123456") {
      setTela('mudar');
    } else {
      setMensagem('Login ou senha incorretos.');
    }
  }

  function voltarTela() {
    setTela('');
    setLogin('');
    setSenha('');
    setMensagem('');
  }

  function cadastrarAluno() {
    const novoAluno = { nome, idade, curso };
    setAlunos([...alunos, novoAluno]);
    setNome('');
    setIdade('');
    setCurso('');
  }

  function atualizarAluno() {
    const novaLista = [...alunos];
    novaLista[indiceEdicao] = { nome, idade, curso };
    setAlunos(novaLista);
    setIndiceEdicao(null);
    setNome('');
    setIdade('');
    setCurso('');
  }

  // CORREÇÃO: era "aluno[index]", tem que ser "alunos[index]"
  function editarAluno(index) {
    const aluno = alunos[index];
    setNome(aluno.nome);
    setIdade(aluno.idade);
    setCurso(aluno.curso);
    setIndiceEdicao(index);
  }

  if (tela === 'mudar') {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Cadastre o Aluno!</Text>

        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text>Idade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a idade"
          value={idade}
          onChangeText={setIdade}
        />

        <Text>Curso:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o curso"
          value={curso}
          onChangeText={setCurso}
        />

        {/* CORREÇÃO: ternário estava incompleto, faltava o else e as chaves {} */}
        {indiceEdicao === null
          ? <Button style={styles.botao} title="Cadastrar Aluno" onPress={cadastrarAluno} />
          : <Button style={styles.botao} title="Atualizar Aluno" onPress={atualizarAluno} />
        }

        {/* CORREÇÃO: "ScrolView" -> "ScrollView" e importado no topo */}
        <ScrollView style={styles.scroll}>
          {alunos.map((aluno, index) => (
            <View key={index} style={styles.info}>
              <Text>Aluno(a) cadastrado!</Text>
              <Text>Nome: {aluno.nome}</Text>
              <Text>Idade: {aluno.idade}</Text>
              <Text>Curso: {aluno.curso}</Text>
              <Button title="Editar" onPress={() => editarAluno(index)} />
            </View>
          ))}
        </ScrollView>

        <Button style={styles.botao} title="Sair" onPress={voltarTela} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Login</Text>

      <Text>Login:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o login"
        value={login}
        onChangeText={setLogin}
      />

      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <Button style={styles.botao} title="Entrar" onPress={validarLogin} />

      <Text>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#438a65',
    flex: 1,
  },

  scroll: {
    width: '100%',
    paddingHorizontal: 10,
  },

  info: {
    textAlign: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#f5f0f0",
  },

  input: {
    textAlign: 'center',
    backgroundColor: '#8f8e8d',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    padding: 5,
  },

  titulo: {
    fontSize: 25,
    color: '#054759',
    marginTop: 10,
    marginBottom: 10,
  },

  texto: {
    marginBottom: 10,
    marginTop: 10,
  },

  botao: {
    margin: 5,
  },
});
