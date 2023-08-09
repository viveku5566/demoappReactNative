import {StyleSheet} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../../constants/Styling';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 15,
      backgroundColor: '#222',
    },
    imgStyle: {
      width: ScreenWidth - 5,
      height: ScreenHeight / 4,
      alignSelf: 'center',
      borderRadius: 5,
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 22,
      color: '#eee',
      marginVertical: 10,
    },
    overViewText: {
      fontWeight: '500',
      fontSize: 15,
      color: '#ccc',
      marginVertical: 10,
    },
    voteText: {
      fontWeight: '500',
      fontSize: 15,
      color: '#fff',
      marginVertical: 10,
    },
    langsText: {
      fontWeight: '500',
      fontSize: 15,
      color: '#fff',
      paddingHorizontal: 4,
    },
  });
