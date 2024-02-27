import React from "react";
import { Text, View } from "react-native";
import Child2 from "./Child2";

const Child1=()=>{
    return(
        <View style={{marginTop:20}}>
        <Text style={{fontSize:28,fontWeight:'600'}}>
            This is the First generation Component
            <Child2/>

        </Text>
        </View>
    )
};

export default Child1;