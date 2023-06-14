
import React from 'react';
import {
    Text, View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TouchableRipple
} from 'react-native';
import Card from '../Items/Card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const CardData = [
    {
        name: 'Burger',
        categories: 'Bakery',
        location: 'Buyukcekmece',
        image: require('../Assets/rj04-hero.jpg'),
        id: 1,

    },
    {
        name: 'Doner',
        categories: 'Bakery',
        location: 'Atasehir',
        image: require('../Assets/xd.jpg'),
        id: 2,
    },
    {
        name: 'Kebab',
        categories: 'Bakery',
        location: 'Beylikduzu',
        image: require('../Assets/xd.jpg'),
        id: 3,
    },
    {
        name: 'Manti',
        categories: 'Bakery',
        location: 'Besiktas',
        image: require('../Assets/xd.jpg'),
        id: 4,
    },
    {
        name: 'Tatli',
        categories: 'Bakery',
        location: 'Kadikoy',
        image: require('../Assets/xd.jpg'),
        id: 5,
    },

];


const MainPage = (props) => {
    function navigateToPage() {
        props.navigation.navigate('Profile');
    }

    return (
        <View style={{ flex: 5, }}>
            <View style={style.header}>
                <TouchableOpacity  ><Icon name="magnify" size={35} style={style.header_icon} />
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