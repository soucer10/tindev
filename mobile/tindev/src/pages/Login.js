import React from  'react'
import {Text, KeyboardAvoidingView, Platform,StyleSheet, Image, TextInput,Button,TouchableOpacity} from 'react-native'

import Logo from '../assets/logo.png'


export default function Login(){
    return(<KeyboardAvoidingView style={styles.container}
            behavior='padding'
            enabled={Platform.OS==='ios'}

    >
        <Image source={Logo}/>
        <TextInput placeholder="Digite seu usuário do Github"
            placeholderTextColor='#999'
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
        />
        <TouchableOpacity style={styles.button}>
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