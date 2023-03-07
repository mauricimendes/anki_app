import React from 'react'
import { Button, Container, Title } from './styles'
import Feather from 'react-native-vector-icons/Feather'

export const StartButton: React.FC = () => {
  return (
    <Container activeOpacity={0.8}>
      <Button
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['rgba(98, 70, 234, 1)', 'rgba(98, 70, 234, 0.8)']}
      >
        <Title>
          Vamos começar
        </Title>
        <Feather name='chevron-right' size={24} color='white' />
      </Button>
    </Container>
  )
}