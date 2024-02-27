import React from "react";
import { Text, View } from "react-native";
import Child3 from "./Child3";

const Child2=()=>{
    return(
        <View style={{paddingTop:20,}}>
        <Text style={{fontSize:24,fontWeight:'600'}}>
            This is the Second generation
        </Text>
        <Child3/>
        </View>
    )
};

export default Child2;