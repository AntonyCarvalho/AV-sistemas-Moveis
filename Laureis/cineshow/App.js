import * as React from 'react';
import {  Text, View, StyleSheet, StatusBar, SafeAreaView,Image, ScrollView, TouchableOpacity } from 'react-native';


export default function App(){
return(


<SafeAreaView style={{backgroundColor:'#30120F'}}>
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

<View> 

<Image source={require('./assets/cineshow.jpg')}
style={{width:375,height:280, margin:10}}
/>

<Text style={styles.titulo}>
ㅤㅤㅤㅤㅤㅤㅤCinemAção
</Text>

<Text style={styles.letra}>
 Apresentação de curtas metragens dos cineastas da regiao de Ribeirão Preto

</Text>

<Text style={styles.letra}>
   Sexta, Domingo - 10hs.

</Text>

<View >
<Image source={require('./assets/Capturar.PNG')}
style={{width:370,height:250, margin:10}}

/>

<Text style={styles.letra}> Localização: R. Barão do Amazonas, 323 - Centro, Ribeirão Preto - SP, 14010-120 </Text>
</View>

<TouchableOpacity style={styles.btn}>
<Text style={styles.btntexto}> Quero participar! </Text>
</TouchableOpacity>


</View>


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
  height:1300,
  backgroundColor:'#240c09',
  margin:7,
  borderRadius:5
},

titulo: {
color:'#fff',
fontSize:20,

        
},

letra:{
color:'#fff',
margin:10 
},

btn:{
backgroundColor:'#F3C717',
width:'80%',
height:45,
alignItems:'center',
justifyContent:'center',
borderRadius:7,
margin:40

}

});