import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import Api from '../../services/api';
import FriendsList from '../../components/friendsList';

export default class InviteScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getFriends();
  }

  async getFriends() {
    const friends = await Api.getFriends();
    this.setState({ friends, isLoading: false });
  }

  render() {
    const { isLoading, friends } = this.state;

    if (isLoading) {
      return <ActivityIndicator />
    }

    return (
        <FriendsList friends={ friends } />
    );
  }
}
