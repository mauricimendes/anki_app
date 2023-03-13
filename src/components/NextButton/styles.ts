import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'

export const Container = styled(LinearGradient)`
  height: 52px;
  width: 52px;
  border: 0;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(Feather)`
  font-size: 32px;
  color: white;
`