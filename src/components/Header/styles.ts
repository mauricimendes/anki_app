import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(LinearGradient)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 56px 24px 24px 24px;
`

export const Presentation = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`

export const Message = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: white;
`

export const Avatar = styled.Image`
  height: 52px;
  width: 52px;
  border-width: 2px;
  border-color: white;
  border-radius: 8px;
`