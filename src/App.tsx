import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, Button, FlatList } from "react-native";
import Header from "./components/Header/Header";
import SaveCard from "./components/SaveCard/SaveCard";
import ToDoCard from "./components/ToDo/ToDoCard";


function App() {



  const [task, setTask] = useState<string>(""); // text input
  const [taskList, setTaskList] = useState<string[]>([]); //Listeye kaydetmek için useState


  //listeye task ekleme
  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");

    };
  }

  //listeden task kaldırma
  const handleRemoveTask = (index: number) => {
    const updateTaskList = [...taskList];
    updateTaskList.splice(index, 1);
    setTaskList(updateTaskList);
  }


  //biten task'ı işaretleme

  const [finishedTask, setFinishedTask] = useState(false);

  const handleFinishedTask = () => {
    setFinishedTask(!finishedTask);
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header_container}
        title="Yapılacaklar"
        counter={taskList.length}
      />
      <FlatList style={styles.flatlist_container}
        data={taskList}
        renderItem={({ item }) =>
          <ToDoCard
            task={item}
            finishTask={handleFinishedTask}
            removeTask={handleRemoveTask}
          />}
      />
      <SaveCard style={styles.savecard_container}
        value={task}
        onChangeText={setTask}
        onPressButton={handleAddTask}
      />

    </SafeAreaView>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#154360"
    
  },
  header_container: {},

  flatlist_container: {},
  savecard_container: {},

})  