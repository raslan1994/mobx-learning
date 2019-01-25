import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

export default class FirstComponent extends Component{
    state = {
        count: 3
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>First Mob-x</Text>
                <View style={styles.instructions}>
                <Text>Count: {this.state.count}</Text>
                <Button 
                    title="+ Increase"
                    onPress={()=>{
                    this.setState({ count: this.state.count + 1 });
                    }}/>
                <Button 
                    title="- Decrease"
                    onPress={()=>{
                    this.setState({ count: this.state.count - 1 });
                    }}/>
                </View>
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  