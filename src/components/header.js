import React from 'react';
import { Text,View } from 'react-native';

// Set Only Textview in Header
const Header = ()=>{

    const {textStyle,viewStyle} = styles;

    return (
         <View style = {viewStyle}>
            <Text style = {textStyle} > Albums! </Text>
         </View>
            );
};

const styles = {

    viewStyle:{
        justifyContent:'center',
        backgroundColor:'#F8F8F8',
        height:60,
        alignItems:'center',
        paddingTop:15
    },
    textStyle:{
        fontSize: 30
    }
};

// export Header for other file
export default Header;