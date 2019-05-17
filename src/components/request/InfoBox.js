import React from 'react'
import styled from '@emotion/styled'

export default ({iconSrc, title, description}) => (
  <Wrapper>
    <Header>
      <Icon src={iconSrc} />
      <Title>{title}</Title>
    </Header>
    <Description>
      {description}
    </Description>
  </Wrapper>
)

const Wrapper = styled('div')({
  maxWidth: 300
})

const Header = styled('h3')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10
})

const Icon = styled('img')({
  width: 30,
  maxHeight: 30,
  marginRight: 10
})

const Title = styled('span')({
  fontWeight: 400,
  fontSize: 20,
  paddingTop: 2
}, ({theme}) => ({
  color: theme.mid.color
}))

const Description = styled('p')({
  margin: '7px 0px'
}, ({theme}) => ({
  color: theme.mid.color,
  '& a': {
    color: theme.primary.color
  }
}))
