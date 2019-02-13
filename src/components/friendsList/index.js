import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.name);
  };

  renderButton = (follow) => {
    if (follow) {
      return (<Text style={ [styles.btnFollowTxt, { backgroundColor: '#E51C72' }] }>SEGUINDO</Text>);
    }

    return (<Text style={ styles.btnFollowTxt }>SEGUIR</Text>);
  }

  render() {
    const { follow } = this.props;
    const bgColor = this.props.index % 2 !== 0 ? '#FFF' : '#1449BF10';
    return (
      <View style={ [styles.itemWrapper, { backgroundColor: bgColor }] }>

        <View style={ styles.itemLeft }>
          <Image
            style={{ width: 60, height: 60 }}
            source={{ uri: this.props.image }} />
          <View style={ styles.name }>
            <Text style={ styles.nameTxt } >{ this.props.name }</Text>
          </View>
        </View>

        <View style={ styles.itemRight }>
          <TouchableOpacity
            style={ styles.btnFollow }
            onPress={ this._onPress }
          >
            { this.renderButton(follow) }
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default class FriendsList extends React.PureComponent {
  state = {follow: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.name;

  _onPressItem = (id: string) => {
    this.setState((state) => {
      const follow = new Map(state.follow);
      follow.set(id, !follow.get(id));
      return {follow};
    });
  };

  _renderItem = ({item, index}) => {
    return (
      <MyListItem
        name={ item.name }
        image={ item.image }
        index={ index }
        onPressItem={this._onPressItem}
        follow={!!this.state.follow.get(item.name)}
        title={item.title}
      />
    )
  };

  render() {
    return (
      <FlatList
        data={this.props.friends}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
