import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import json from "./tp.json"




export default function App() {
  return (
    <View style={styles.container}>

    <ScrollView style={styles.scroll}>

      {json.map((data) => 
      <View style={styles.cards}>
        <Image style={{width: '30%', height: '100%'}} source={{uri: data.img}}/>
        <View style={styles.textCards}>
        <Text style={styles.title}>{data.title}</Text>
        <Text>{data.desc}</Text>
      </View>
      </View>
      )}

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9f0',    
  },
  scroll: {
    flex: 1,
  },
  cards: {
    flex: 1,
    flexDirection: "row",
    margin: 15,
    backgroundColor: "#f5e3d3",
    borderRadius: 10,
    padding: 10
  },
  textCards: {
    flex:1,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    textDecorationLine: "underline",
    marginBottom: 5,
  }

});
