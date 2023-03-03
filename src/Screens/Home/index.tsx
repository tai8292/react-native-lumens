import { Icons, Images } from '@Assets';
import { Button, Text } from '@Components';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { HomeDisplayItem } from './Components';
import useHome, { HomeSectionItem } from './useHome';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const { data } = useHome();

  const renderItem = ({ item }: { item: HomeSectionItem }) => {
    return <HomeDisplayItem item={item} />;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.btnBack}>
            <Image source={Icons.ic_back} style={styles.icBack} />
          </TouchableOpacity>
          <Text style={styles.txtTier}>Silver Tier</Text>
          <Text style={styles.txtTierDesc}>
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive
            rewards.
          </Text>
        </View>
        <ImageBackground source={Images.bgCoin} imageStyle={styles.bgImage} style={styles.coinInfo}>
          <Text style={styles.txtAvailable}>Available Coin balance</Text>
          <Text style={styles.txtCoin}>340</Text>
          <View style={styles.line}>
            <View style={[styles.lineProgress, { width: '60%' }]} />
          </View>
          <Text style={[styles.txtTierDesc, { color: '#92929D', marginBottom: 16 }]}>
            {`You have paid rental fee for $1,200.\nPay more $800 to achieve Gold Tier.`}
          </Text>
          <Pressable>
            <Text style={[styles.txtTierDesc, styles.pressBenefit]}>View tier benefits</Text>
          </Pressable>
          <Button text="My Coupons" style={styles.btnMyCoupons} textStyle={styles.txtMyCoupons} />
          <Text style={styles.txtDate}>Updated : 02/11/2021</Text>
        </ImageBackground>
        <View style={styles.contentContainer}>
          {data.map((item, index) => {
            return (
              <View style={styles.sectionContainer} key={'section' + index}>
                <Text style={styles.sectionTitle}>{item.title}</Text>
                <FlatList
                  horizontal
                  renderItem={renderItem}
                  data={item.data}
                  extraData={item.data}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 60,
    backgroundColor: '#171725',
  },
  icBack: {
    width: 24,
    height: 24,
  },
  btnBack: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  txtTier: {
    color: '#FFFFFF',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '600',
    marginTop: 16,
  },
  txtTierDesc: {
    color: '#B5B5BE',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    marginBottom: 216,
  },
  coinInfo: {
    marginHorizontal: 16,
    padding: 24,
    backgroundColor: '#FFFFFF',
    marginTop: -170,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bgImage: {
    flex: 1,
    borderRadius: 8,
  },
  txtAvailable: {
    fontSize: 14,
    lineHeight: 24,
    color: '#B5B5BE',
  },
  txtCoin: {
    fontSize: 48,
    lineHeight: 56,
    color: '#171725',
    marginTop: 8,
  },
  line: {
    width: '100%',
    height: 5,
    backgroundColor: '#E2E2EA',
    borderRadius: 2.5,
    marginVertical: 33,
  },
  lineProgress: {
    height: 5,
    backgroundColor: '#0062FF',
    borderRadius: 2.5,
  },
  pressBenefit: {
    color: '#0062FF',
    marginBottom: 24,
  },
  btnMyCoupons: {
    backgroundColor: '#171725',
  },
  txtMyCoupons: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  txtDate: {
    width: '100%',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    color: '#B5B5BE',
    marginTop: 16,
  },
  contentContainer: {
    flex: 1,
  },
  sectionContainer: {
    paddingVertical: 24,
  },
  sectionTitle: {
    paddingLeft: 24,
    paddingBottom: 26,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#171725',
  },
});

export default Home;
