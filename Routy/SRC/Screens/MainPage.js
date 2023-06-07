
import React from 'react';
import {
    Text, View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';


import StoryList from '../Items/StoryList';
import Card from '../Items/Card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const CardData = [
    {
        name: 'Burger',
        categories: 'Bakery',
        image: require('../Assets/xd.jpg'),
        id: 1,
    },
    {
        name: 'Doner',
        categories: 'Bakery',
        image: require('../Assets/xd.jpg'),
        id: 2,
    },
    {
        name: 'Kebab',
        categories: 'Bakery',
        image: require('../Assets/xd.jpg'),
        id: 3,
    },
    {
        name: 'Manti',
        categories: 'Bakery',
        image: require('../Assets/xd.jpg'),
        id: 4,
    },
    {
        name: 'Tatli',
        categories: 'Bakery',
        image: require('../Assets/xd.jpg'),
        id: 5,
    },

];


const handleProductSelect = ({ navigation, onPress1 }) => {
    navigation.navigate("Details")
}

const MainPage = (props, onPress) => {
    function navigateToPage() {
        props.navigation.navigate('Profile');
    }
    return (
        <View style={{ flex: 5, }}>
            <View style={style.header}>
                <TouchableOpacity ><Icon name="magnify" size={35} style={style.header_icon} />
                </TouchableOpacity>
                <Image
                    source={require('../Assets/fast.png')}
                    style={style.image}
                />
                <TouchableOpacity onPress={navigateToPage} ><Icon name="account" size={35} style={style.header_icon2} />
                </TouchableOpacity>


            </View>

            <View style={{ flex: 100 }} >

                <FlatList
                    data={CardData}
                    renderItem={({ item }) => {
                        return <Card info={item} />;
                    }}
                    keyExtractor={(CardData) => CardData.id.toString()}
                    showsVerticalScrollIndicator={true}
                />

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
    image: {
        width: 250,
        height: 50,
        marginLeft: 50


    },
    header_icon: {
        paddingHorizontal: 0,
    },
    header_icon2: {
        marginLeft: 40,
    },


});
export default MainPage;