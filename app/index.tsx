import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Link } from "expo-router";

export class Index extends Component {
  render() {
    return (
      
        <View style={styles.container}>
          <Text style={styles.text}>Home screen</Text>
          <Link href="/about" style={styles.button}>Go to About Screen</Link>
        </View>
      
    );
  }
}

export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25929e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
