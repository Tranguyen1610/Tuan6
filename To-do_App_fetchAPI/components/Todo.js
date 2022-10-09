import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Todo({item,setList,list}) {
  return (
    <View style={styles.todo_con}>
        <Text>{item.todo}</Text>
        <TouchableOpacity
            style={styles.button_delete}
            onPress={() => {
                fetch('https://6342e9603f83935a784c41c4.mockapi.io/api/Todo_App/todo/'+item.id, {
                        method: 'DELETE',
                        headers: {'Content-Type': 'application/json'},
                        
                    }).then((data)=>{
                        fetch('https://6342e9603f83935a784c41c4.mockapi.io/api/Todo_App/todo')
                            .then(data=>data.json())
                            .then(data =>setList(data))
                    })
                }
            } >
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