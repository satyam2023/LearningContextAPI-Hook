import React, { useContext } from "react";
import { Text, View } from "react-native";
import Child4 from "./Child4";
import { ContextAge} from "./Parent";

const Child3=()=>{
    const age=useContext(ContextAge);
   
    
    return(
        <View style={{marginTop:20}}>
        <Text style={{fontSize:19,fontWeight:'600'}}>
            This is the Third generation of age {age}
        </Text>
        <Child4/>
        </View>
    )
};

export default Child3;