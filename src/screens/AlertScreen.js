import React, { Component } from "react";
import * as WebBrowser from "expo-web-browser";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


const styles = StyleSheet.create({
  outer:{
    flex:1,
    backgroundColor: '#b20700',
  },
  titleContainer:{
    flex: 0.5,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  welcome: {
    marginLeft: '10%',
    textAlign: 'left',
    fontSize: 50,
    color: '#FFFFFF',
  },
  paragraph: {
    marginVertical: "10%",
    marginHorizontal: "10%",
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'left',
    color: '#FFFFFF',
  },
  button: {
    position: 'absolute',
    width: "80%",
    height:"3em",
    borderRadius:10,
    justifyContent:'center',
    backgroundColor: '#FFFFFF',
    bottom:25,
  },
  buttonText:{
    textAlign:'center',

  },
});

class AlertScreen extends Component{

  state = {
    alert: null,
    errorMessage:null,
  };

  constructor(props) {
    super(props);
    this.watchAlert();

  }

  componentDidMount() {
    this.watchAlert();
  }

  watchAlert = async () => {
    let alert = await this.state.alert
  }

  render() {
    let text = 'Any critical messages will update this text.. lets see how it looks when there is a lot of text and it needs to go to a new line or something like that \n \n Please report any symptoms that you might have.';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.alert) {
      text = JSON.stringify(this.state.alert);
    }

    return (
      <View style={styles.outer}>
        <View style={styles.titleContainer}>
          <Text style={styles.welcome}> Alert </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>{text}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Check your symptoms </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};




AlertScreen.navigationOptions = {
  header: null,
};

export default AlertScreen;
