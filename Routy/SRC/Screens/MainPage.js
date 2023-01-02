/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text, View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import Navbar from '../Items/Navbar';
import StoryList from '../Items/StoryList';
import Card from '../Items/Card';
import Icon from 'react-native-vector-icons/FontAwesome5';


const CardData = [
    {
        name: 'Merhaba',
        categories: 'Bakery',
        image: require('../Assets/xd.jpg'),
        id: 1,
    },
    {
        name: 'Merhaba',
        categories: 'Bakery',
        image: require('../Assets/xd.jpg'),
        id: 2,
    },
    {
        name: 'Merhaba',
        categories: 'Bakery',
        image: require('../Assets/xd.jpg'),
        id: 3,
    },
    {
        name: '4.',
        categories: 'Bakery',
        image: require('../Assets/xd.jpg'),
        id: 4,
    },
    {
        name: '5.',
        categories: 'Bakery',
        image: require('../Assets/xd.jpg'),
        id: 5,
    },

];


const MainPage = (props) => {
    function navigateToPage() {
        props.navigation.navigate('Settings');
    }
    return (
        <View style={{ flex: 5 }}>
            <View style={style.header}><TouchableOpacity ><Icon name="search" size={25} style={style.header_icon} /></TouchableOpacity>

                <Text style={style.header_title}>Digitus</Text>
                <Icon name="user" size={25} style={style.header_icon} />
            </View>
            <StoryList />
            <View style={{ flex: 100 }}>
                <FlatList
                    data={CardData}
                    renderItem={({ item }) => {
                        return <Card info={item} />;
                    }}
                    keyExtractor={(CardData) => CardData.id.toString()}
                    showsVerticalScrollIndicator={true}
                />
            </View>
            <View style={{ flex: 10 }} >
                <Navbar onPress={navigateToPage} />
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingVertical: 10,


    },
    container: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_title: {
        paddingHorizontal: 130,
        alignItems: 'center',
        fontSize: 25,
        fontWeight: '900',
        color: 'black',
    },
    header_icon: {
        paddingHorizontal: 10,
    },


});
export default MainPage;