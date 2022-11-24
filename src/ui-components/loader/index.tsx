import { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import styled from 'styled-components/native';

const ImageLoader = styled.Image`
  paddingtop: 10em;
  pagging: 20em;
  height: 50px;
  width: 50px;
  backgroundcolor: green;
`;

const Loader = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
      }}
    >
      <ImageLoader source={require('../../../assets/waiting.png')} />
    </Animated.View>
  );
};

export default Loader;
