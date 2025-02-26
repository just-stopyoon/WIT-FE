import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Modalize } from 'react-native-modalize';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'; // ✅ Stack Navigator 추가
import { NavigationContainer } from '@react-navigation/native'; // ✅ NavigationContainer 추가
import { styles } from './AppStyles';
import NameScreen from './Name'; // ✅ Name.js 파일 import
import BirthScreen from './Birth';

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator(); // ✅ Stack Navigator 생성

function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'BalooBhai-Regular': require('./assets/fonts/BalooBhai-Regular.ttf'),
    'Pretendard-Black': require('./assets/fonts/Pretendard-Black.ttf'),
    'Pretendard-Bold': require('./assets/fonts/Pretendard-Bold.ttf'),
    'Pretendard-ExtraBold': require('./assets/fonts/Pretendard-ExtraBold.ttf'),
    'Pretendard-ExtraLight': require('./assets/fonts/Pretendard-ExtraLight.ttf'),
    'Pretendard-Light': require('./assets/fonts/Pretendard-Light.ttf'),
    'Pretendard-Medium': require('./assets/fonts/Pretendard-Medium.ttf'),
    'Pretendard-Regular': require('./assets/fonts/Pretendard-Regular.ttf'),
    'Pretendard-SemiBold': require('./assets/fonts/Pretendard-SemiBold.ttf'),
  });

  const modalizeRef = useRef(null);
  const [checkedItems, setCheckedItems] = useState([false, false, false, false]);

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const isAllChecked = checkedItems.every((item) => item);

  const toggleCheckbox = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const openModal = () => {
    modalizeRef.current?.open();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mainText}>
            칼로리 계산은 {"\n"}
            <Text style={styles.witText}>WIT</Text>에서
          </Text>
          <Text style={styles.subText}>사진 한 번으로 쉽고 빠르게 계산하기</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.kakaoButton} onPress={openModal}>
            <Text style={styles.kakaoText}>카카오로 로그인</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.naverButton} onPress={openModal}>
            <Text style={styles.naverText}>네이버로 로그인</Text>
          </TouchableOpacity>
        </View>

        {/* ✅ 하단 모달 추가 */}
        <Modalize ref={modalizeRef} adjustToContentHeight>
          <View style={styles.modalContainer}>
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>서비스 이용 필수 동의</Text>

            <FlatList
              data={[
                "이용 약관 동의",
                "개인정보 보호방침 동의",
                "민감정보수집 및 이용 동의",
                "만 14세 이상입니다",
              ]}
              renderItem={({ item, index }) => (
                <TouchableOpacity style={styles.checkboxItem} onPress={() => toggleCheckbox(index)}>
                  <Ionicons
                    name={checkedItems[index] ? "checkmark-circle" : "checkmark-circle-outline"}
                    size={24}
                    color={checkedItems[index] ? "#5638E3" : "#DADADA"}
                  />
                  <Text style={styles.checkboxText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{ paddingBottom: 20 }}
            />

            {/* ✅ "다음" 버튼 클릭 시 Name.js 화면으로 이동 */}
            <TouchableOpacity
              style={[styles.nextButton, { backgroundColor: isAllChecked ? "#5638E3" : "#DADADA" }]}
              disabled={!isAllChecked}
              onPress={() => navigation.navigate('Name')}
            >
              <Text style={styles.nextButtonText}>다음</Text>
            </TouchableOpacity>
          </View>
        </Modalize>
      </View>
    </GestureHandlerRootView>
  );
}

// ✅ 내비게이션 설정
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="Birth" component={BirthScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
