import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import homeHeroImg from "../img/home-hero.svg";

export const RulesPageTemplate = () => (
  <PageWrapper>
    <div
      css={css`
        display: flex;
        flex-direction: row;
        max-width: 1200px;
        align-items: center;
        @media (max-width: 900px) {
          flex-direction: column-reverse;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-right: 3vw;
          @media (max-width: 900px) {
            padding-right: 0px;
            margin-top: 5vw;
          }
        `}
      >
        <h1
          css={css`
            font-size: 60px;
            font-weight: 700;
            max-width: 450px;
            margin: 0px;
            margin-bottom: 0.4em;
            color: #262725;
            @media(max-width: 1400px){
              font-size: 4.8vw;
            }
            @media (max-width: 1200px) {
              font-size: 5vw;
            }
            @media (max-width: 900px) {
              font-size: 7vw;
              text-align: center;
            }
            @media (max-width: 700px) {
              font-size: 8.5vw;
            }
            @media (max-width: 400px) {
              font-size: 9.5vw;
            }
          `}
        >
          Smart Solutions
          <br /> for Smart
          <br /> Government
        </h1>
        <div
          css={css`
            display: flex;
            @media(max-width: 900px){
              justify-content: center;
            }
          `}
        >
          <CTAButton>Request a Demo</CTAButton>
        </div>
      </div>
      <div
        css={css`
          padding-top: 3vw;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          css={css`
            width: 42vw;
            max-width: 500px;
            @media (max-width: 900px) {
              width: 80vw;
              max-width: 90%;
            }
          `}
          src={homeHeroImg}
          alt=""
        />
      </div>
    </div>
  </PageWrapper>
);

const RulesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout pageTitle="SOS Enterprise">
      <RulesPageTemplate
        title={frontmatter.title}
        smartTitle={frontmatter.smartTitle}
        smartDescription={frontmatter.smartDescription}
        {...frontmatter}
      />
    </Layout>
  );
};

export default RulesPage;

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        smartTitle
        smartDescription
        reviewQuote1
        reviewAuthor1
        oneStopTitle
        oneStopDescription
        backOfficeTitle
        backOfficeDescription
        reviewQuote2
        reviewAuthor2
      }
    }
  }
`;

RulesPageTemplate.propTypes = {
  title: PropTypes.string,
  smartTitle: PropTypes.string,
  smartDescription: PropTypes.string,
};

const PageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const CTAButton = styled.button`
  padding: 16px 18px 10px 18px;
  background: ${({ theme }) => theme.primary.color};
  font-size: 28px;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  border: none;
  line-height: 1;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primaryLight.color};
  }
`;
