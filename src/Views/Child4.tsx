import React from "react";
import { Text, View } from "react-native";
import { ContextName } from "./Parent";
import { useContext } from "react";

const Child4=()=>{
   const name=useContext(ContextName);
    return(
        <View style={{marginTop:20}}>
        <Text style={{fontSize:14,fontWeight:'600'}}>
            This is the Fourth generation Name:{name}
        </Text>
        </View>
    )
};

export default Child4;