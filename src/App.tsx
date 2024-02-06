import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, Button, FlatList } from "react-native";
import Header from "./components/Header/Header";
import SaveCard from "./components/SaveCard/SaveCard";
import ToDoCard from "./components/ToDo/ToDoCard";


function App() {



  const [task, setTask] = useState<string>(""); // text input
  const [taskList, setTaskList] = useState<{ task: string; isFinished: boolean }[]>([]); //Listeye kaydetmek için useState
  const [finishedTaskCounter, setFinishedTaskCounter] = useState(0);
  const [lastFinishedTaskIndex, setLastFinishedTaskIndex] = useState<number | null>(null);


  //listeye task ekleme
  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, { task, isFinished: false }]);
      setTask("");

    };
  }

 // listeden task kaldırma
const handleRemoveTask = (taskIndex: number) => {
  const removedTask = taskList[taskIndex];

  setTaskList((prevTaskList) => {
    // Eğer removedTask isFinished durumu true ise, counter'ı azalt
    if (removedTask.isFinished) {
      setFinishedTaskCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    }
    return prevTaskList.filter((_, index) => index !== taskIndex);
  });
};

  //biten task'ı işaretleme

  const [finishedTask, setFinishedTask] = useState(false);

  const handleFinishedTask = (taskIndex: number) => {
    const updatedTaskList = [...taskList];
    const isFinished = !updatedTaskList[taskIndex].isFinished;

    if (!isFinished && lastFinishedTaskIndex === taskIndex) {
      // Eğer task zaten bitmişse ve handleRemoveTask çağrılmadan siliniyorsa, counter'ı azaltma
      setLastFinishedTaskIndex(null);
    } else if (isFinished) {
      setLastFinishedTaskIndex(taskIndex);
    }

    updatedTaskList[taskIndex].isFinished = isFinished;
    setTaskList(updatedTaskList);

    setFinishedTaskCounter((prevCounter) => (isFinished ? prevCounter + 1 : prevCounter - 1));
  };


  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header_container}
        title="Yapılacaklar"
        counter={taskList.length - finishedTaskCounter}
      />
      <FlatList style={styles.flatlist_container}
        data={taskList}
        renderItem={({ item, index }) =>
          <ToDoCard
            index={index}
            task={item.task}
            isFinished={item.isFinished}
            finishTask={handleFinishedTask}
            removeTask={() => handleRemoveTask(index)}
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
    backgroundColor: "#154360"

  },
  header_container: {},

  flatlist_container: {},
  savecard_container: {},

})  
