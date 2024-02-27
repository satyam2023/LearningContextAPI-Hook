import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Child1 from "./Child1";
import { createContext } from 'react';
const ContextName= createContext("");
const ContextAge=createContext('');

const Parent=()=>{
    
    const [name,setname]=useState('');
    const [age,setage]=useState('')

    return(
        <ContextName.Provider value={name} >
            <ContextAge.Provider value={age}>
            
            <View style={{backgroundColor:'#2E8AC4FF',padding:20,height:'100%'}}>
        <Text style={{fontSize:32,fontWeight:'600'}}>
            This is the Parent
        </Text>
        <TextInput
        placeholder="Enter Your Name..."
        placeholderTextColor={'black'}
        style={{padding:10,
        backgroundColor:'#E6E6E6',borderRadius:10}} 
        onChangeText={(text:any)=>setname(text)}
        />

<TextInput
        placeholder="Enter Your age"
        placeholderTextColor={'black'}
        style={{padding:10,
        backgroundColor:'#E6E6E6',borderRadius:10,marginTop:10}} 
        onChangeText={(text:any)=>setage(text)}
        />

       
        <Child1/>
        </View>
        </ContextAge.Provider>
        </ContextName.Provider>
    )
};

export default Parent;

export {ContextName,ContextAge};

