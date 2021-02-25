import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = () => {
  return (
    <View styel={styles.container} >
      <Text>Hello World</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default Header;