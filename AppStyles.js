import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: '35%',
    left: 35,
    right: 20,
  },
  mainText: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Pretendard-Bold',
    color: '#000',
    textAlign: 'left',
    lineHeight: 65,
  },
  witText: {
    fontSize: 48,
    color: '#6A4DFF',
    fontWeight: 'bold',
    fontFamily: 'BalooBhai-Regular',
    textAlign: 'left',
    marginTop: -4,
  },
  subText: {
    fontSize: 16,
    fontFamily: 'Pretendard-SemiBold',
    color: '#9E9E9F',
    marginTop: -12,
    textAlign: 'left',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 70,
    width: '98%',
    alignSelf: 'center',
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 12,
  },
  kakaoText: {
    color: '#3C1E1E',
    fontSize: 16,
    fontFamily: 'Pretendard-SemiBold',
  },
  naverButton: {
    backgroundColor: '#03C75A',
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  naverText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Pretendard-SemiBold',
  },

  /* ✅ 모달 스타일 추가 */
  modalContainer: {
    padding: 20,
    paddingTop: 10,
    paddingBottom : 30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  modalHandle: {
    backgroundColor: '#DADADA',
    width: 60,
    height: 5,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily : 'Pretendard-Bold',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 10,
  },

  /* ✅ 체크박스 스타일 */
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '200%',
    paddingVertical: 8,
  },
  checkboxText: {
    fontSize: 15,
    marginLeft: 10,
    marginRight : 100,
    fontFamily: 'Pretendard-SemiBold',
  },

  /* ✅ '다음' 버튼 */
  nextButton: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 20,
    width: '95%',
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
