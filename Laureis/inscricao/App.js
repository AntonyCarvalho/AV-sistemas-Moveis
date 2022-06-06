import * as React from 'react';
import {  Text, View, StyleSheet, StatusBar, SafeAreaView,Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';


export default function App(){
return(


<SafeAreaView style={{backgroundColor:'#030303'}}>
<View style={styles.header}>


<TouchableOpacity>
<Image source={require('./assets/perfil.png')}
style={{width:30,height:30}}
/></TouchableOpacity>


<Image source={require('./assets/logo.webp')}
style={{width:80,height:80}}
/>


<TouchableOpacity>
<Image source={require('./assets/config.png')}
style={{width:30,height:30}}
/></TouchableOpacity>

</View>



<ScrollView >


<View style={styles.box}>

<TextInput
style={styles.fundo}
placeholder="Nome do Projeto"
onChangeText={()=>{}}
/>

<TouchableOpacity style={styles.btn}>
<Text style={styles.btntexto}> Adicionar arquivo </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btnB}>
<Text style={styles.btntexto}> Adicionar Banner </Text>
</TouchableOpacity>




<TouchableOpacity style={styles.btnI}>
<Text style={styles.btntexto}>Enviar! </Text>
</TouchableOpacity>

</View>


</ScrollView>





</SafeAreaView>






);

}


const styles = StyleSheet.create({
header:{
backgroundColor:'#DAA520',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-around',
height:150


},
box:{
  height:800,
  backgroundColor:'#202020',
  margin:7,
  borderRadius:5
},

btn:{
backgroundColor:'#F0FFF0',
width:'30%',
height:40,
alignItems:'center',
justifyContent:'center',
borderRadius:10,
margin:40,
marginTop:5,


},
btnB:{
backgroundColor:'#F0FFF0',
width:'30%',
height:40,
alignItems:'center',
justifyContent:'center',
borderRadius:10,
margin:40,
marginTop:1

},

fundo:{
backgroundColor:'#fff',
width:'80%',
marginBottom:15,
color:'#222',
fontSize:17,
borderRadius:7,
padding:10,
margin:40
},
btnI:{
backgroundColor:'#F3C717',
width:'80%',
height:45,
alignItems:'center',
justifyContent:'center',
borderRadius:7,
margin:40

}

});