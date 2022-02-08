import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    TouchableOpacity

} from 'react-native'

export function Home(){

  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.title}>
            Welcome, Bruno
            </Text>

        <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        />

        <TouchableOpacity
         style={styles.button}
         activeOpacity={.7}
         >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginTop:50}]}>
            My Skills
        </Text>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
      
      backgroundColor: '#121015',
      paddingHorizontal:30,
      paddingVertical:70

    },
    title:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'#1F1E25',
        color: '#fff',
        fontSize:18,
        padding: Platform.OS === 'ios' ? 15 : 0,
        marginTop:30,
        borderRadius:7,
    },
    button:{
        backgroundColor:'#A370f7',
        padding: 15,
        borderRadius:7,
        alignItems:'center',
        marginTop:20
    },

    buttonText:{
        color: '#fff',
        fontSize:17,
        fontWeight:'bold'
    }
})