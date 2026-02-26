import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.text}> crie uma conta </Text>{' '}
      <TextInput style={styles.input} placeholder="EMAIL" />
      {'.'}
      <TextInput style={styles.input} placeholder="SENHA" />
      {'.'}
      <Button title="ENTRA" color="#0acf06"/>
      {'.'}
      <Button title="ENTRA" color="#db2525"/>


    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    color: '#27F5F2',
    padding: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },

  input: {
    backgroundColor: '#C7C7C7',
    textAlign: 'center',
    width: '60%',
    borderRadius: 3,
    height: '7%',
    color: '#737272',
  },
});
