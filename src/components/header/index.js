import React from 'react';
import { Text, View } from 'react-native';

const Header = ({
    params,
}) => (
    <View style={{
      height: 145,
      margin: 10,
      marginTop: 20,
      padding: 10,
      borderColor: '#1449BF',
      borderWidth: 5,
      backgroundColor: '#FFF',
    }}>
      <View style={{
        position: 'absolute',
        backgroundColor: '#E51C72',
        borderColor: '#FFF',
        borderWidth: 4,
        top: 15,
        left: -9.1,
        height: 50,
        width: 13,
      }}/>
      <View style={{
        position: 'absolute',
        marginVertical: 5,
        top: 7,
        left: 10,
      }}>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: '#E51C72',
        }}>EXCELENTE!</Text>
      </View>
      <View style={{
        position: 'absolute',
        top: 70,
        left: 15,
        width: 300,
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#1449BF',
        }}>
          Para aproveitar ao máximo, se 
          conecte com seus amigos!
        </Text>
      </View>
      <View style={{
        position: 'absolute',
        bottom: 2,
        right: 2,
        backgroundColor: '#1449BF',
        paddingHorizontal: 7,
        paddingVertical: 2,
      }}>
        <Text style={{
          color: '#FFF',
          fontWeight: '200',
        }}>
          CONTINUAR
        </Text>
      </View>
    </View>
);

export default Header;
