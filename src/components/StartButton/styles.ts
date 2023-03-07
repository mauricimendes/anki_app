import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  margin-top: 200px;
`

export const Button = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
  background-color: red;
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`