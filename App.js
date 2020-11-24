/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Modal, Button} from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType={'fade'}
        transparent={false}
        visible={visible}
        onRequestClose={() => alert('Modal has been closed!!!')}>
        <View style={styles.modal}>
          <Text style={styles.textInput}>Modal is open</Text>
          <Button title="Click to close" onPress={() => setVisible(false)} />
        </View>
      </Modal>

      <Button title="click to open" onPress={() => setVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
  },

  textInput: {
    fontFamily: 'Arial',
    fontSize: 20,
  },
});

export default App;
