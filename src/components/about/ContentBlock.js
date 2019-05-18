import React from 'react'
import styled from '@emotion/styled'

export default ({title, description, icon, reversed}) => (
  <Wrapper reversed={reversed}>
    <Icon reversed={reversed} src={icon} />
    <Column>
      <Title reversed={reversed}>{title}</Title>
      <Description reversed={reversed}>{description}</Description>
    </Column>
  </Wrapper>
)

const Wrapper = styled('div')({
  display: 'flex',
  width: '100%',
  maxWidth: 500
}, ({reversed}) => ({
  flexDirection: reversed ? 'row-reverse' : 'row'
}), ({theme}) => ({
  color: theme.mid.color,
  [theme.media.max.sm]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column'
})

const Icon = styled('img')({
  width: '100%',
  maxWidth: 100
}, ({reversed}) => ({
  marginRight: reversed ? 0 : 30,
  marginLeft: reversed ? 30 : 0
}))

const Title = styled('h1')({
  fontWeight: 300,
  marginBottom: 10
}, ({theme}) => ({
  color: theme.mid.color,
  [theme.media.max.sm]: {
    textAlign: 'center'
  }
}), ({reversed}) => ({
  textAlign: reversed ? 'left' : 'right'
}))

const Description = styled('p')({
  margin: 0,
  lineHeight: 1.5
}, ({reversed}) => ({
  textAlign: reversed ? 'left' : 'right'
}), ({theme}) => ({
  [theme.media.max.sm]: {
    textAlign: 'left',
    padding: '0px 15px'
  }
}))
