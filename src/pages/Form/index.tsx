import React, { useCallback, useState } from 'react'
import BackButton from '../../components/BackButton'
import Input from '../../components/Input'
import NextButton from '../../components/NextButton'
import { Container, Enunciation, FormApp, FormAction, Question } from './styes'

import questions from './questions'

const Form = () => {
  const [actualQuestion, setActualQuestion] = useState(1)
  const [cover, setCover] = useState('')
  const [back, setBack] = useState('')

  return (
    <Container>
      <BackButton />
      <FormApp>
        {questions?.map(question => {
          if (question.id === actualQuestion) {
            return (
              <Question key={question.id}>
                <Enunciation>
                  {question.enunciation}
                </Enunciation>
                <Input placeholder={question.placeholder} />
              </Question>
            )
          }
        })}
        <FormAction>
          <NextButton onPress={() => {
            actualQuestion === 1 && setActualQuestion(2)
          }} />
        </FormAction>
      </FormApp>
    </Container>
  )
}

export default Form