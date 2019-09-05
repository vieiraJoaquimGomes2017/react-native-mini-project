import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pessoas: 0,
    };
  }

  contar = () => {
    this.setState({
      pessoas: (this.state.pessoas += 1),
    });
  };

  zerar = () => {
    this.setState({pessoas: 0});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.qtde}>Pessoas: {this.state.pessoas}</Text>
        <TouchableHighlight onPress={this.contar} underlayColor="transparent">
          <View style={styles.button}>
            <Text style={styles.titleButton}>Contar</Text>
            <Icon name="plus" size={18} color="white" />
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.zerar} underlayColor="transparent">
          <View style={styles.button}>
            <Text style={styles.titleButton}>Zerar Contador</Text>
            <Icon name="undo" size={18} color="white" />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtde: {
    marginTop: 20,
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  button: {
    flexDirection: 'row',
    width: 300,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'blue',
    borderColor: 'blue',
    justifyContent: 'center',
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  titleButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 20,
  },
});

export default App;
