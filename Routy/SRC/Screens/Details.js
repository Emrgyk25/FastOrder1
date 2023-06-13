import * as React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';


function Details() {
    const { params } = useRoute();
    let info = params;
    const { name, categories, image ,id } = info;

    return (
        <Text>{name} , {categories} , {id} </Text>
    );
}

export default Details;

