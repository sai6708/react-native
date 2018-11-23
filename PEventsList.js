import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Listview from './commoncomponents/Listview';

class PEventsList extends Component {
  state = { eventslist: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ eventslist: response.data }));
  }


  renderList() {
    return this.state.eventslist.map(event =>
      <Listview key={event.title} data={event} />
    );
  }


  render() {
    return (
      <ScrollView>
        {this.renderList()}
      </ScrollView>
    );
  }

}

export default PEventsList;
