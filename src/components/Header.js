//import libraries
import React from 'react';
import {Text, View} from 'react-native';

//make a Component
const Header = (props) =>{
  const {textStyle,viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles={
  viewStyle:{
    backgroundColor:'#F8F8F8',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:15,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.2,
    elevation:3,
    position:'relative'
  },
  textStyle:{
    fontSize:20
  }
}

// Make component available to other parts of the app
export default Header;
