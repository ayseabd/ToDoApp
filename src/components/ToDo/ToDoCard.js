import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./ToDoCard.styles";

const ToDoCard = (props) => {

    const [isFinished, setIsFinished] = useState(false);

    const handlePress = () => {
        setIsFinished(!isFinished);
        props.finishTask(props.task); // Biten görevi işaretleme fonksiyonunu güncelledik
    };


    return (
     
            <View style={isFinished ? styles.finished_container : styles.container}>
                <TouchableOpacity
                    style={styles.task}
                    onLongPress={props.removeTask}
                    onPress={handlePress}>

                    <Text style={isFinished ? styles.finished_task : styles.task}>
                        {props.task}
                    </Text>


                </TouchableOpacity>
            </View>
        
    );
}

export default ToDoCard;