import React,{useState,useEffect} from  'react'
import {Text, KeyboardAvoidingView, Platform,StyleSheet, Image, TextInput,Button,TouchableOpacity} from 'react-native'

import AsyncStoroge from '@react-native-community/async-storage'
import api from '../services/api'
import Logo from '../assets/logo.png'


export default function Login({navigation}){

    const[user,setUser]=useState('')

    useEffect(()=>{
        AsyncStoroge.getItem('user').then(user=>{
            if(user){
                navigation.navigate('Main',{user})
            }
        })
    },[])

    async function handleLogin(){
        
        const responde=await api.post('/devs',{username:user})
        
        const {_id}=responde.data

        await AsyncStoroge.setItem('user',_id)
        
        navigation.navigate('Main',{ user:_id})

    }


    return(<KeyboardAvoidingView style={styles.container}
            behavior='padding'
            enabled={Platform.OS==='ios'}

    >
        <Image source={Logo}/>
        <TextInput 
            value={user}
            onChangeText={setUser}
            placeholder="Digite seu usuário do Github"
            placeholderTextColor='#999'
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
        />
        <TouchableOpacity 
        onPress={handleLogin}
        style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>)
       
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        justifyContent:'center',
        alignItems:'center',
        padding:30,
    },
    input:{
        height:46,
        alignSelf:'stretch',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:4,
        marginTop:20,
        paddingHorizontal:15,
    },
    button:{
        height:46,
        alignSelf:'stretch',
        backgroundColor:'#DF4723',
        borderRadius:4,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'#FFF',
        fontSize:16,
        fontWeight: 'bold',
    },
})