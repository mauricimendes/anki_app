import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { Header } from '../../components/Header'
import { StartButton } from '../../components/StartButton'
import { Description, Main } from './styles'

export const Empty: React.FC = () => {
  return (
    <SafeAreaView style={{ width: 'auto', height: 'auto' }}>
      <Header />
      <Main>
        <Description>
          Você não pussuí assuntos ou cartas criadas ainda!
        </Description>
        <StartButton />
      </Main>
    </SafeAreaView>
  )
}