import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './BirthStyles';

export default function Birth() { 
  const route = useRoute();
  const name = route.params?.name || '이름';
  const navigation = useNavigation();

  // 날짜 선택을 위한 상태
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  // 날짜 변경 핸들러
  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowPicker(false);
  };

  return (
    <View style={styles.container}>
      {/* 진행 바 */}
      <View style={styles.progressBarContainer}>
        <View style={styles.inactiveProgress} />
        <View style={styles.activeProgress} />
        <View style={styles.inactiveProgress} />
        <View style={styles.inactiveProgress} />
      </View>

      {/* 질문 텍스트 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          {name}님의{"\n"}<Text style={{ color: '#5638E3' }}>생년월일</Text>을 알려주세요
        </Text>
      </View>

      {/* 입력 필드 - 생년월일 선택 */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.dateInput} onPress={() => setShowPicker(true)}>
          <Text style={styles.dateText}>{date.getFullYear()} 년 {date.getMonth() + 1} 월 {date.getDate()} 일</Text>
        </TouchableOpacity>
      </View>

      {/* 날짜 선택기 (iOS: 모달, Android: 팝업) */}
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          maximumDate={new Date()} // 미래 날짜 선택 방지
          locale="ko-KR" // 한국어 설정
          onChange={onChange}
        />
      )}

      {/* 다음 버튼 */}
      <TouchableOpacity
        style={[styles.nextButton, { backgroundColor: '#5638E3' }]}
        onPress={() => navigation.navigate('NextScreen', { birthDate: date })}
      >
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}