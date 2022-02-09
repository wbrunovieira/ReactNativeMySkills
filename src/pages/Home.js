import React , { useState, useEffect }from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView, 
    TextInput,
    Platform,
    FlatList,

} from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home(){


    const [ newSkill, setNewSkill ] = useState('');
    const [ mySkills, setMySkills] = useState([]);
    const [ greeting, setGreeting] = useState('');
    
    function handleAddNewSkill(){
        setMySkills(oldState => [...oldState, newSkill]);
    }

useEffect(
    () => {
        const currentHour = new Date().getHours();
        console.log(currentHour)

        if(currentHour < 12) {
            setGreeting("Good morning !");
        } else if(currentHour >= 12 && currentHour < 18) {
            setGreeting("Good Afternoon !");
        } else {
            setGreeting("Good Night !")
        }

    }, []
)
  return (

    <SafeAreaView style={styles.container}>
        
        <Text style={styles.title}>
            Welcome, Bruno
        </Text>

        <Text style={styles.greeting}>
            {greeting}
        </Text>

        <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        />  
        <Button onPress={handleAddNewSkill}/>

        <Text style={[styles.title, {marginVertical:50}]}>
             My Skills
        </Text>

        <FlatList
            data={mySkills}
            keyExtractor={item => item}
            renderItem={({ item } ) => (
                <SkillCard skill={item}/>
            )}
        />
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#121015',
        paddingHorizontal:30,
        paddingVertical:70,
      

    },
    title:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold',
        marginHorizontal:20
    },
   
    input:{
        backgroundColor:'#1F1E25',
        color: '#fff',
        fontSize:18,
        padding: Platform.OS === 'ios' ? 15 : 0,
        marginTop:30,
        borderRadius:7,
        marginHorizontal:20
    },
   greeting:{
       color: '#fff',
       marginHorizontal:20,
       marginVertical:20
   }
})