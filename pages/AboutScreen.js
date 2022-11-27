import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Image, Platform, StatusBar, Text, Linking, Touchable, TouchableNativeFeedback} from 'react-native';
import colors from '../config/colors';

function AboutScreen(props) {
    const [data, setData] = useState([]);
    const developer="salahudin-24";
    
    function getProfile() {
        axios({
            method : "get",
            url : ('https://api.github.com/users/'+developer),
        })
        .then((response) => {
            setData(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }

    useEffect(() =>{
        getProfile();
    }, [])

    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={() => Linking.openURL(data.html_url)}>
          <View>
            <Image 
                source={{uri : data.avatar_url}}
                style={styles.profilePicture}
            />
            <Text style={{fontSize : 30, fontWeight : "300", alignSelf : "center", paddingTop : 10}}>
                {data.name}
            </Text>
            <Text style={{fontSize : 14, fontWeight : "300", alignSelf : "center"}} >
                {data.html_url}
            </Text>
            </View>
          </TouchableNativeFeedback>


          
      </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.background,
        paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight:0,
        justifyContent : "center"
    },
    profilePicture : {
        width : 150,
        height : 150,
        borderRadius : 100,
        fadeDuration : 100,
        alignSelf : "center",
    },    
})

export default AboutScreen;

