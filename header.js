
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 25,
    elevation: 2,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5
  },
  textStyle: {
   fontSize: 20,
   alignItems: 'flex-start',
   color: 'orange',
  }
};

export default Header;
