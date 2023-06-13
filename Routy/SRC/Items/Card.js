/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

const Card = ({ info }) => {
    const { name, categories, image } = info;

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', { ...info })}  >
                <View style={styles.cardContainer}>
                    <Image style={styles.imageStyle} source={image} />
                    <View style={styles.infoStyle}>
                        <Text style={styles.titleStyle}>{name}</Text>
                        <Text style={styles.categoryStyle}>{categories}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>

    );
};



const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 50;
const radius = 30;
const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 5,
        alignItems: 'center',
        marginTop: 30,


    },
    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: 'white',
        height: 200,
        borderRadius: radius,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 130,
        width: deviceWidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
        color: 'green',
    },
    categoryStyle: {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
});

export default Card;