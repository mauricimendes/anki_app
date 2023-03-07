import React from "react"
import { Avatar, Container, Message, Name, Presentation } from './styles'

export const Header: React.FC = () => {
  return (
    <Container
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['rgba(98, 70, 234, 1)', 'rgba(98, 70, 234, 0.8)']}
    >
      <Presentation>
        <Name>
          Olá Mariana
        </Name>
        <Message>
          Mantenha os estudos em dia
        </Message>
      </Presentation>
      <Avatar source={{ uri: 'https://github.com/mauricimendes.png' }} />
    </Container>
  )
}