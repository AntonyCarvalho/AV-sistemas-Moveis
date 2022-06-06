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

<ScrollView>



<View style={styles.box}> 
<TouchableOpacity>
<Image source={require('./assets/cineshow.jpg')}
style={{width:375,height:280, margin:10}}
/>
</TouchableOpacity>
</View>



<View style={styles.box}>
<TouchableOpacity>
<Image source={require('./assets/cenemacao.jpg')}
style={{width:375,height:280, margin:10}}
/>
</TouchableOpacity>
 </View>



<View style={styles.box}>
<TouchableOpacity>
<Image source={require('./assets/cineita.jpg')}
style={{width:375,height:280, margin:10}}
/>
</TouchableOpacity>
 </View>






<View style={styles.box}>
<TouchableOpacity>
<Image source={require('./assets/faltacria.jpg')}
style={{width:375,height:280, margin:10}}
/>
</TouchableOpacity>
 </View>






<View style={styles.box}> 
<TouchableOpacity>
<Image source={require('./assets/images.jpg')}
style={{width:375,height:280, margin:10}}
/>
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
  height:300,
  backgroundColor:'#240c09',
  margin:7,
  borderRadius:5
}

});