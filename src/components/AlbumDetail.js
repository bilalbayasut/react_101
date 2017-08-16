import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url}=album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    albumImageStyle
        } = styles;
  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{uri:thumbnail_image}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
      <Image style={albumImageStyle} source={{uri:'https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg'}} />
      </CardSection>

      <CardSection>
      <Button onPress={()=>Linking.openURL(url)}>
        Buy Now
      </Button>
      </CardSection>

    </Card>
  );
};

const styles={
  headerContentStyle:{
    flexDirection:'column',
    justifyContent:'space-around'
  },
  headerTextStyle:{
    fontSize:18
  },
  thumbnailStyle:{
    height:50,
    width:50
  },
  albumImageStyle:{
    height:300,
    flex:1,
    width:null
  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10
  }
};

export default AlbumDetail;
