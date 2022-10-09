import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Todo({item,setList,list}) {
  return (
    <View style={styles.todo_con}>
        <Text>{item.todo}</Text>
        <TouchableOpacity
            style={styles.button_delete}
            onPress={() => {setList(list.filter( ite => ite!==item ));}}>
            <Text style={{textAlign:'center'}}>Delete</Text></TouchableOpacity>
    </View>
)}
const styles = StyleSheet.create({
    button_delete:{
        backgroundColor:'#D83B3B',
        width:'20%',
        height:30,
        justifyContent:'center',
        borderRadius:10,
    },
    todo_con:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
        width:360,
        backgroundColor:'#E8E1BE',
        marginVertical:10,
        borderRadius:10,
    },
})