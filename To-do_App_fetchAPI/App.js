import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Vibration } from 'react-native';
import Addtodo from './components/Addtodo';
import Todo from './components/Todo';

export default function App() {
  useEffect(() => {
    fetch('https://6342e9603f83935a784c41c4.mockapi.io/api/Todo_App/todo')
    .then(data=>data.json())
    .then(data =>setList(data))
},[])
  const [todo,setTodo] = useState('');
  const [list,setList] = useState([]);
  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={{height:35}}></View>
      <Addtodo
        todo={todo}
        setTodo={setTodo}
        setList={setList}/>
      <View style={styles.main_con1}>
        <FlatList
              data={list}
              renderItem={({item}) => 
                <Todo 
                  item={item}
                  setList={setList}
                  list={list}/> 
                }/>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:'100%',
  },

  main_con1:{
    flex:4,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  },
});
