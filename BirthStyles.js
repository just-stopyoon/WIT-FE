import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  /* 진행 바 스타일 */
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  activeProgress: {
    flex: 1,
    height: 4,
    backgroundColor: '#5638E3',
    borderRadius: 2,
    marginRight: 5,
  },
  inactiveProgress: {
    flex: 1,
    height: 4,
    backgroundColor: '#DADADA',
    borderRadius: 2,
    marginRight: 5,
  },

  /* 질문 텍스트 */
  questionContainer: {
    marginBottom: 100, // 입력 필드와 간격 확보
  },

  titleText: {
    color:'#4832D5',
  },
  
  questionText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 32,
  },

  /* 입력 필드 */
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    paddingBottom: 10,
    marginBottom: 40, // 버튼과 여백 추가
  },
  input: {
    flex: 1,
    fontSize: 22,
    fontFamily : 'Pretendard-Medium',
    color: '#000',
  },
  characterCount: {
    fontSize: 16,
    color: '#C4C4C4',
  },

  /* ✅ 추가된 생년월일 선택 스타일 */
  dateInput: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'Pretendard-Medium',
  },

  /* 다음 버튼 */
  nextButton: {
    position: 'absolute',
    bottom: 50, // ✅ 완전히 하단으로 이동
    left: 20,
    right: 20,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily : 'Pretendard-Bold',
  },
});
