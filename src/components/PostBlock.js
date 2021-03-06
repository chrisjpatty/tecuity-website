import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import panels1 from "../img/panels-1.svg";
import panels2 from "../img/panels-2.svg";

export default ({frontmatter: {title, date}, excerpt, index, fields: {slug}}) => (
  <Wrapper>
    <InnerWrapper>
      <Link to={slug}>
        <Title>{title}</Title>
      </Link>
      <DateWrapper>{date}</DateWrapper>
      <Excerpt>{excerpt}</Excerpt>
      {
        index%4 === 0 &&
        <Panels1 src={panels1} />
      }
      {
        (index%4) - 1 === 0 &&
        <Panels2Wrapper>
          <Panels2 src={panels2} />
        </Panels2Wrapper>
      }
    </InnerWrapper>
  </Wrapper>
)

const Wrapper = styled('article')({
  width: '100%',
  marginBottom: 40
})

const InnerWrapper = styled('div')({
  position: 'relative',
  background: '#ffffff',
  padding: '35px 30px',
  borderRadius: 3,
  boxShadow: `0 50px 100px -20px rgba(50,50,93,.15), 0 30px 40px -30px rgba(0,0,0,.1), 0 -18px 60px -10px rgba(0,0,0,.015)`
}, ({theme}) => ({
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: theme.primary.color
    }
  },
  [theme.media.max.md]: {
    boxShadow: `0 20px 50px -20px rgba(50,50,93,.05), 0 30px 40px -30px rgba(0,0,0,.07), 0 -18px 60px -10px rgba(0,0,0,.015)`
  }
}))

const Title = styled('h1')({
  fontWeight: 400,
  fontSize: 24,
  marginTop: 0,
  marginBottom: 5
}, ({theme}) => ({
  color: theme.dark.color
}))

const DateWrapper = styled('span')({
  fontWeight: 300,
  fontStyle: 'italic'
}, ({theme}) => ({
  color: theme.mid.color
}))

const Excerpt = styled('p')({
  marginBottom: 0,
  fontWeight: 300
})

const Panels1 = styled("img")({
  position: "absolute",
  left: "-20%",
  top: -50,
  width: "40%",
  zIndex: -1
}, ({theme}) => ({
  [theme.media.max.md]: {
    width: '60%',
    transform: 'scaleX(-1)'
  }
}));

const Panels2Wrapper = styled('div')({
  position: "absolute",
  right: 0,
  bottom: -55,
  width: "40%",
  zIndex: -2
}, ({theme}) => ({
  [theme.media.max.sm]: {
    overflow: 'hidden',
    width: '60%'
  }
}))

const Panels2 = styled("img")({
  marginLeft: "50%",
  width: '100%'
}, ({theme}) => ({
  [theme.media.max.sm]: {
    overflow: 'hidden',
    width: '100%',
    marginLeft: "25%"
  }
}));
