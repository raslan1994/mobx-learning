import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';

const thirdCounter = observable({ count: 7 });
thirdCounter.increase = function(){
    this.count++;
}
thirdCounter.decrease = function(){
    this.count--;
}
class FirstComponent extends Component{
    count = 2;
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>First Mob-x</Text>
                <View style={styles.instructions}>
                <Text>Count: {this.count}</Text>
                <Text>Count 2: {this.props.store.count}</Text>
                <Text>Count 3: {thirdCounter.count}</Text>
                <Button 
                    title="+ Increase"
                    onPress={()=>{
                        this.count++;
                        this.props.store.increment();
                        thirdCounter.increase();
                    }}/>
                <Button 
                    title="- Decrease"
                    onPress={()=>{
                        this.count--;
                        this.props.store.decrement();
                        thirdCounter.decrease();
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
  