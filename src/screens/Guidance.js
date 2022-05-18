import {Icon} from '@rneui/base';
import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  FlatList,
} from 'react-native';
import {moderateScale} from '../assets/components/Dimensions';

const {width, height} = Dimensions.get('window');

const data = [
  {
    id: '1',
    data: 'گاۓ رکھنے کی جگہ',
  },
  {id: '2', data: 'گاۓ  کی نسل '},
  {id: 3, data: 'گاۓ  کی افزائش'},
  {id: 4, data: 'گاۓ  کا چارہ'},
  {id: 5, data: 'سوال جواب'},
  {id: 6, data: 'دودھ کی پیداوار'},
];

export default HomeScreen = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.id == 1) {
            navigation.navigate('Housing');
          }
        }}
        activeOpacity={1}
        style={styles.card}>
        <Text style={styles.cardTag}>{item.data}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.mainContainer}>
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          type="antdesign"
          color={'white'}
          size={moderateScale(25)}
          onPress={() => navigation.replace('HomeScreen')}
        />
        <Text numberOfLines={1} style={styles.headerTag}>
          گاۓ کے متعلق رہنمائ.
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-evenly',
          width: width,
        }}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: height / 10,
  },
  header: {
    width: '100%',
    height: moderateScale(60),
    backgroundColor: '#1AB92A',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(14),
  },
  headerTag: {
    color: 'white',
    fontFamily: 'kasheeda',
    fontSize: moderateScale(30),
    width: '90%',
  },
  card: {
    width: width / 2 - (width / 100) * 5,
    height: width / 2 - (width / 100) * 5,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: moderateScale(10),
    backgroundColor: '#1AB92A',
    marginVertical: moderateScale(10),
  },
  cardTag: {
    color: 'white',
    fontFamily: 'urdu',
    fontSize: moderateScale(25),
  },
});
