import React from 'react';
import { View , TouchableOpacity, Text, FlatList} from 'react-native';
import { getSidebarTheme } from '../constants/Themes';
import { Divider, Button } from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons'




export default function Menu(props) {
  const theme = getSidebarTheme(props.theme);
  const categories = ['wirtschaft', 'unterhaltung','gesundheit', 'wissenschaft','sport' , 'technologie', 'lokal'];
  const changeTheme = type => {
    console.log(type);
  }
  return (
    <View style={theme.sidebarContainer}>
      <View style={theme.sidebarDrawer}>
        <View style={{height: "10%", marginTop: 25}}>
          <TouchableOpacity onPress={()=> props.newsHandler('allgemein')}><Text style={theme.sidebarText}>start</Text></TouchableOpacity>
          <Divider style={theme.sidebarDivider} />
        </View>
        
          <FlatList 
          data={categories}
          renderItem={(itemData ) => {return (<TouchableOpacity onPress={()=> props.newsHandler(itemData.item)}><Text style={theme.sidebarText}>{itemData.item}</Text></TouchableOpacity>)}}
          keyExtractor={(item, index) => item + index}
          style={{height: "80%"}}
          />
        <View style={{height: "10%", flexDirection: "row"}}>
          <Button type="clear" icon={ <Ionicons name="md-sunny" size={32} color='#fff' />} onPress={()=> props.changeTheme('light')}/>
          <Button type="clear" icon={ <Ionicons name="md-moon" size={32} color='#fff' />} onPress={() =>props.changeTheme('dark')}/>
          <Button type="clear" icon={ <Ionicons name="md-flower" size={32} color='#fff' />} onPress={()=> props.changeTheme('colorfull')}/>
        </View>

      </View>
    </View>
  );
}
