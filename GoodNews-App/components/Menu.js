import React from 'react';
import { View , TouchableOpacity, Text} from 'react-native';



export default function Menu() {
  return (
      <View style={{flex:1,alignItems: 'center',backgroundColor: '#102042',borderBottomRightRadius: 30}}>
          <TouchableOpacity><Text style={{color: '#F7F3C2'}}>Start</Text></TouchableOpacity>
          <Text style={{color: '#F7F3C2'}}>_______________________________________</Text>
      </View>
  );
}
