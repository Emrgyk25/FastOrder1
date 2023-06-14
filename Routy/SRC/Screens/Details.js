import * as React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DishRow from "../Screens/DishRow";


function Details() {
    const { params } = useRoute();
    let info = params;
    const { name, categories, image, id, location, dishes, dish } = info;

    return (

        <View>
            <View style={style.header}>
                <Image
                    source={require('../Assets/fast.png')}
                    style={style.image}
                />
                <TouchableOpacity  ><Icon name="basket" size={35} style={style.header_icon2} />
                </TouchableOpacity>


            </View>
            <ScrollView>
                <View className="relative">
                    <Image
                        source={image}
                        className="w-full h-56 p-4 bg-gray-300"
                    />
                </View>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{name}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">

                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">{id}</Text> • {location}
                                </Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <Text className="text-xs text-gray-500 space-x-1">
                                    <Text> {location}</Text>
                                </Text>
                            </View>
                        </View>

                        <Text className="text-gray-500 mt-2 pb-4">{location}</Text>
                    </View>

                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">


                    </TouchableOpacity>
                </View>

                <View className=" ">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

                    <DishRow
                        key={id}
                        id={id}
                        name={name}
                        image={location}
                    />


                </View>
            </ScrollView>


        </View>

    );
}

export default Details;

const style = StyleSheet.create({
    imagecontainer: {
        height: 130,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',


    },
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
        marginLeft: 80


    },
    header_icon: {
        paddingHorizontal: 0,
    },
    header_icon2: {
        marginLeft: 40,
    },
})

