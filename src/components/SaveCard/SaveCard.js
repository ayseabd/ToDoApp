import React from "react";
import { TextInput, View, Button, TouchableOpacity, Text } from "react-native";
import styles from "./SaveCard.styles";

function SaveCard(props) {

    return (
        <View style={styles.bottom_container}>
            <TextInput
                style={styles.input}
                value={props.value}
                onChangeText={props.onChangeText}
                placeholder="Yapılacak..."
                placeholderTextColor="#747778"
            />

            <TouchableOpacity
                style={props.value.length > 0 ? styles.button_active : styles.button}
                onPress={props.onPressButton}>
                <Text style={styles.button_text}>Kaydet</Text>
            </TouchableOpacity>
        </View>



    )
}

export default SaveCard;