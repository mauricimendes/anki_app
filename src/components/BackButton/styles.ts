import styled from "styled-components/native";
import Feather from 'react-native-vector-icons/Feather'

export const Container = styled.TouchableOpacity`
  background-color: #F0F0F0;
  height: 52px;
  width: 52px;
  border: 0;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`

export const Icon = styled(Feather)`
  color: #6246EA;
  font-size: 32px;
`