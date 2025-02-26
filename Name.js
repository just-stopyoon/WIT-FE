import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './NameStyles';

export default function NameScreen() {
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const maxLength = 7; // 최대 글자 수

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      {/* 진행 바 */}
      <View style={styles.progressBarContainer}>
        <View style={styles.activeProgress} />
        <View style={styles.inactiveProgress} />
        <View style={styles.inactiveProgress} />
        <View style={styles.inactiveProgress} />
      </View>

      {/* 질문 텍스트 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>만나서 반가워요!{"\n"}어떻게 불러드리면 될까요?</Text>
      </View>

      {/* 입력 필드 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="7글자 내로 입력해주세요"
          placeholderTextColor="#C4C4C4"
          maxLength={maxLength}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.characterCount}>{name.length}/{maxLength}</Text>
      </View>

      {/* 다음 버튼 */}
      <TouchableOpacity
        style={[styles.nextButton, { backgroundColor: name.length > 0 ? '#5638E3' : '#C4C4C4' }]}
        disabled={name.length === 0}
        onPress={() => navigation.navigate('Birth', {name})} // 다음 화면으로 이동
      >
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
