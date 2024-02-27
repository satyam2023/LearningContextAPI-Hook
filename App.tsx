
import React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, Text,
} from 'react-native';
import Parent from './src/Views/Parent';





function App(): React.JSX.Element {
  

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#2E8AFFFF'} barStyle={'dark-content'}/>
      <Text style={{backgroundColor:'#2E8AFFFF',textAlign:'center',fontWeight:'700',padding:5}}> Context Learning</Text>
      <Parent/>
      
    </SafeAreaView>
  );
}



export default App;
