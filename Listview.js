import React from 'react';
import { View, Text, Image } from 'react-native';

const Cards = (props) => {
  return (
    <View style={styles.cardstyle}>
      <Image
        style={styles.imagestyle}
        source={{ uri: props.data.image }}
      />
      <Text style={styles.textstyle}>{props.data.title}</Text>
    </View>
  );
};

const styles = {

  cardstyle: {
    borderwidth: 1,
    borderheight: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 70,
  },

  textstyle: {
    fontSize: 30,
    fontFamily: 'sans-serif-condensed'
  },

  imagestyle: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  }

};
export default Cards;
