import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function AboutPage({navigation,route}){
    const aboutImage = "https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png"
    
    useEffect(()=>{
        navigation.setOptions({
            title:"Welcome!",
            headerStyle: {
                backgroundColor: '#1F266A',
                shadowColor: "#1F266A",
            },
            headerTintColor: "#fff",
        })
    },[])
    return (
        <View style={styles.container}>
             <StatusBar style="light" />
            <Text style={styles.title}>소개 혹은 안내 페이지로 구성</Text>
        
            
            <View style={styles.textContainer}>
                <Image style={styles.aboutImage} source={{uri:aboutImage}} resizeMode={"cover"}/>
                <Text style={styles.desc01}>주된 설명문주된 설명문주된 설명문주된 설명문주된 설명문</Text>
                <Text style={styles.desc02}>세부 설명문세부 설명문세부 설명문세부 설명문세부 설명문</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Connect Instagram</Text>
                </TouchableOpacity>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#1F266A",
        alignItems:"center"
      
    },
    title: {
        fontSize:30,
        fontWeight:"700",
        color:"#fff",
        paddingLeft:30,
        paddingTop:20,
        paddingRight:30
    },
    textContainer: {
        width:300,
        height:500,
        backgroundColor:"#fff",
        marginTop:50,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    aboutImage:{
        width:150,
        height:150,
        borderRadius:30
    },
    desc01: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        paddingLeft:22,
        paddingRight:22

    },
    desc02: {
        textAlign:"center",
        fontSize:15,
        fontWeight:"700",
        padding:22
    },
    button:{
        backgroundColor:"orange",
        padding:20,
        borderRadius:15
    },
    buttonText: {
        color:"#fff",
        fontSize:15,
        fontWeight:"700"
    }
})