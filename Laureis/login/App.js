import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Image, TextInput,TouchableOpacity,Text, StyleSheet, Animated,SafeAreaView } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';




export default function App(){

const[offset] = useState(new Animated.ValueXY({x:0, y:95}));

useEffect(()=>{
  
  Animated.spring(offset.y,{
  
  toValue:0,
  speed:4,
  bounciness:20
  }).start();
  
  }, []);

return(
 
<KeyboardAvoidingView style={styles.backg}>
<View style={styles.backg} >
<Image source={require('./assets/386282434016211.webp')}
style={{width:250,height:250}}

/>
</View>

<Animated.View style={[styles.log, {tranforme: [{translateY:offset.y } ]} ]}>
<TextInput
style={styles.fundo}
placeholder="Login"
onChangeText={()=>{}}
/>

<TextInput
style={styles.fundo}
placeholder="Senha"
onChangeText={()=>{}}
/>

<TouchableOpacity style={styles.btn}>
<Text style={styles.btntexto}> acessar </Text>
</TouchableOpacity>

<TouchableOpacity >
<Text style={styles.btntexto}> criar conta </Text>
</TouchableOpacity>



</Animated.View>


</KeyboardAvoidingView>


);
}

const styles = StyleSheet.create({
backg:{
  flex:1,
  alignItems:'center',
  justifyContent: 'center',
  backgroundColor:'#DAA520'
},

cLogo:{
flex:1,
width:66,
height:58,
justifyContent:'center',

},

log:{
flex:1,
alignItems:'center',
justifyContent:'center',
width:'90%',
paddingBottom:50
},


fundo:{
backgroundColor:'#fff',
width:'90%',
marginBottom:15,
color:'#222',
fontSize:17,
borderRadius:7,
padding:10
},

btn:{
backgroundColor:'#fff',
width:'90%',
height:45,
alignItems:'center',
justifyContent:'center',
borderRadius:7,

},

btntexto:{
fontSize:18

},


})
