import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#2ebb34',
    margin: 5,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: 'center',
    height: 50,
  },
  finished_container: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    margin: 5,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: 'center',
    height: 50,
  },
  task: {
    width: 300,
    color: '#ecf0f1',
    fontSize: 25,
    marginLeft: 5, 
  },

  finished_task: {
    
    fontSize: 25,
    marginLeft: 5,
    textDecorationLine: 'line-through', // Tamamlanmış görev için çizili stil
  },
})