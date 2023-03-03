import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Text } from '@Components';

import { HomeSectionItem } from '../useHome';

type IProps = {
  item: HomeSectionItem;
};

const HomeDisplayItem = (props: IProps) => {
  const { item } = props;
  const { description, image, amount, buttonText } = item;

  const onPress = () => {
    //TODO: check button type and do action
    //        switch(buttonType){
    //            case: ''
    //        }
    console.log('press');
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.txtAmount}>{`${amount} ${amount > 1 ? 'Coins' : 'Coin'}`}</Text>
        <Text style={styles.txtDesc} numberOfLines={2}>
          {description}
        </Text>
        {buttonText && (
          <Pressable onPress={onPress}>
            <Text style={styles.txtButtonText}>{buttonText}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 240,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    marginLeft: 24,
  },
  image: {
    width: 200,
    height: 98,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  contentContainer: {
    padding: 16,
  },
  txtAmount: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#0062FF',
  },
  txtDesc: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#92929D',
    marginTop: 8,
  },
  txtButtonText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#0062FF',
    marginTop: 8,
  },
});

export default HomeDisplayItem;
