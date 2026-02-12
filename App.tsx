import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return(
    <View style={styles.container}>
    <Text style={styles.text}> FOI </Text>

    <TextInput style={styles.input}
    placeholder="Meu primeiro App"
     />

     <Button title="SALVAR" />

    </View>
  );
}

const styles = StyleSheet.create({
 text:{
   fontSize: 30,
   color: '#27F5F2'
 },

container:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000000"
},

input:{
  backgroundColor: "#C7C7C7",
  textAlign: "center",
  width: "50%",
  borderRadius: 4,
  height: "5%",
  color: "#737272"
},



});
