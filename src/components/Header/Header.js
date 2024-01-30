import React from "react";
import { SafeAreaView, Text, View} from "react-native";
import styles from "./Header.styles";

function Header(props) {
    return (
      
            <SafeAreaView style={styles.header}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.counter}>{props.counter}</Text>
            </SafeAreaView>
       
    )
}

export default Header;