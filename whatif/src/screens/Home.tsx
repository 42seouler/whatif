import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import {globalColors} from '../globalStyles';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, backgroundColor: globalColors.red}}>
        <Text>헤더</Text>
      </View>
      <View style={{flex: 1, backgroundColor: globalColors.yellow}}>
        <Text>태그분류</Text>
      </View>
      <View>
        <Text>카드 섹션</Text>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
