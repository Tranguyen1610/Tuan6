import {StyleSheet, Text, View,TextInput,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-web';

export default function Addtodo({todo,setTodo,setList}) {
  return (  
    <View style={styles.main_con}>
      <TextInput
        style={styles.textInput}
        placeholder='Enter todo'
        value={todo?.todo}
        onChangeText={(text)=>setTodo({id:Math.random().toString(),todo:text,})}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          if(todo ==='')
            Alert.alert('Thông báo','Nhập nội dung');
          else
            {
              fetch('https://6342e9603f83935a784c41c4.mockapi.io/api/Todo_App/todo', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(todo)
                })
                fetch('https://6342e9603f83935a784c41c4.mockapi.io/api/Todo_App/todo')
                .then(data=>data.json())
                .then(data =>setList(data))
              } 
              setTodo('');
            }
          }
        >
        <Text style={styles.text_button}>Add</Text>
      </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  textInput:{
    borderWidth:1,
    borderColor:'#F37710',
    width:'90%',
    padding:15,
    borderRadius:10,
  },
  text_button:{
      color:'#fff',
      fontSize:17,
      textAlign:'center',
  },
  button:{
      margin:20,
      padding:13,
      backgroundColor:'#F37710',
      borderRadius:10,
      width:100,
  },
  main_con:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
})