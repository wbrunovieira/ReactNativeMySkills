import React from 'react';
import { TouchableOpacity,
         Text,
        StyleSheet,
        TouchableOpacityProps
    } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill:string
}        
export function SkillCard({skill, ...rest}: SkillCardProps){

    return (

    <>
    
        <TouchableOpacity 
            style={styles.buttonSkill}
            {...rest}
            >
                
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
        marginVertical:10,
        marginHorizontal:20
         
    },
    textskill:{
        color: '#fff',
        fontSize:22,
        fontWeight:'bold',
         
    }

})