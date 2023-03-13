import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Container, Icon } from "./styles"

const NextButton: React.FC<TouchableOpacityProps> = ({ ...rest }) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.8}>
      <Container
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['rgba(98, 70, 234, 1)', 'rgba(98, 70, 234, 0.8)']}
      >
        <Icon name='chevron-right'>

        </Icon>
      </Container>
    </TouchableOpacity>
  )
}

export default NextButton