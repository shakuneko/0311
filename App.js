import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.line2}>- - - - - - - - - - - - - - - -  </Text>
      <Text style={styles.font}>110719017</Text>
        <Text style={styles.name}>李祐瑄</Text>
      <View style={styles.facebg}>
      <Text style={styles.face}>ฅ(=･ω･=)ฅ</Text>
      </View>
      <Text style={styles.line}>- - - - - - - - - - - - - - - - </Text>
      <Text style={styles.name2}>私はしゃくねこです。</Text>
      <Text style={styles.name3}>どうぞよろしくお願いします。</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCBBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  facebg:{
    backgroundColor: '#B088FF',
    height:55,
    width:200,
    borderRadius:10,
    marginTop:20,
  },
  face:{
    color:'#FFFFFF',
    fontSize:30,
    marginLeft:24,
    marginTop:4,
  },
  name:{
    fontSize:30,
    fontWeight:'bold',
    color:'#7700FF',
    alignSelf:'center',
    marginTop:10,
  },
  name2:{
    fontSize:15,
    fontWeight:'bold',
    color:'#CCEEFF',
    alignSelf:'center',
    marginTop:10,
  },
  name3:{
    fontSize:15,
    fontWeight:'bold',
    color:'#CCEEFF',
    alignSelf:'center',
    marginTop:10,
  },
  font:{ 
    fontSize:30,
    fontWeight:'bold',
    color:'#FFFFFF',
    marginTop:30,
  },
  line:{
    color:'#FFFFFF',
    fontWeight:'bold',
    fontSize:30,
    marginLeft:0,
    marginTop:30,
  },
  line2:{
    color:'#FFFFFF',
    fontWeight:'bold',
    fontSize:30,
    marginLeft:0,
    marginTop:30,
  },
  
});
