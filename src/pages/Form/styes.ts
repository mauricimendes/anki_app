import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  padding-top: 56px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`

export const FormApp = styled.View`
  width: 100%;
  height: 70%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const Question = styled.View`
  width: 100%;
  height: 80%;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Enunciation = styled.Text`
  font-size: 16px;
  width: 100%;
  font-weight: bold;
  color: #22232E;
`

export const FormAction = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`