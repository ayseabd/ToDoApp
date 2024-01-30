import { StyleSheet } from "react-native"

export default StyleSheet.create({

    bottom_container: {
       
        justifyContent: 'flex-end',
        padding: 10,
        borderRadius: 8,
        margin: 10,
        height: 100,
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    button: {
        padding: 10,
        backgroundColor: '#707b7c',
        borderRadius: 8
    },
    button_text: {
        textAlign: 'center',
        color: '#ffffff'
    },
    button_active:{
        padding:10,
        borderRadius:8,
        backgroundColor:"#Fdb500"
    },
   
    input: {
        height: 40,
        borderColor: '#7fb3d5',
        borderBottomWidth: 1,
        marginBottom: 10,
    }
})