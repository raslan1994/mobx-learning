import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';

class FirstComponent extends Component{
    count = 2;
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>First Mob-x</Text>
                <View style={styles.instructions}>
                <Text>Count: {this.count}</Text>
                <Button 
                    title="+ Increase"
                    onPress={()=>{
                    this.count++;
                    }}/>
                <Button 
                    title="- Decrease"
                    onPress={()=>{
                    this.count--;
                    }}/>
                </View>
            </View>
        )
    }   
}

export default observer(
    decorate(FirstComponent,{
        count: observable   
    })
);

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
  