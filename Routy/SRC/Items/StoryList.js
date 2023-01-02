/* eslint-disable prettier/prettier */
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import React from 'react';

export default function StoryList() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={styles.storyContainer}>
                <View style={styles.storyProfile}>
                    <Image source={{ uri: 'https://cdn.ye-mek.net/App_UI/Img/out/650/2019/06/salcali-corba-resimli-yemek-tarifi(7).jpg' }}
                        style={styles.storyProfileImage} />
                </View>
                <View style={styles.storyProfile}>
                    <Image source={{ uri: 'https://cdn.ye-mek.net/App_UI/Img/out/650/2019/06/salcali-corba-resimli-yemek-tarifi(7).jpg' }}
                        style={styles.storyProfileImage} />
                </View>
                <View style={styles.storyProfile}>
                    <Image source={{ uri: 'https://cdn.ye-mek.net/App_UI/Img/out/650/2019/06/salcali-corba-resimli-yemek-tarifi(7).jpg' }}
                        style={styles.storyProfileImage} />
                </View>
                <View style={styles.storyProfile}>
                    <Image source={{ uri: 'https://cdn.ye-mek.net/App_UI/Img/out/650/2019/06/salcali-corba-resimli-yemek-tarifi(7).jpg' }}
                        style={styles.storyProfileImage} />
                </View>
                <View style={styles.storyProfile}>
                    <Image source={{ uri: 'https://cdn.ye-mek.net/App_UI/Img/out/650/2019/06/salcali-corba-resimli-yemek-tarifi(7).jpg' }}
                        style={styles.storyProfileImage} />
                </View>
                <View style={styles.storyProfile}>
                    <Image source={{ uri: 'https://cdn.ye-mek.net/App_UI/Img/out/650/2019/06/salcali-corba-resimli-yemek-tarifi(7).jpg' }}
                        style={styles.storyProfileImage} />
                </View>
                <View style={styles.storyProfile} />
                <View style={styles.storyProfile} />
                <View style={styles.storyProfile} />
                <View style={styles.storyProfile} />
                <View style={styles.storyProfile} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    storyContainer: {
        flexDirection: 'row',
        paddingHorizontal: 3,


    },
    storyProfile: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: 20,
        borderRadius: 10,


    },
    storyProfileImage: {
        width: '95%',
        height: '95%',
        borderRadius: 50,


    },



})