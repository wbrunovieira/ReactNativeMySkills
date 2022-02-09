import React , { useState }from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard({skill}){

    return (


    <>
    
        <TouchableOpacity  style={styles.buttonSkill}>
            <Text style={styles.textskill}>
                {skill}
            </Text>
        </TouchableOpacity>
   </>
)
    }
const styles = StyleSheet.create({

    title:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold'
    },

    buttonSkill:{
     
        backgroundColor:'#1f1e25',
        padding: 15,
        borderRadius:50,
        fontWeight:'bold',
        alignItems:'center',
        marginVertical:10
         
    },
    textskill:{
        color: '#fff',
        fontSize:22,
        fontWeight:'bold',
         
    }

})