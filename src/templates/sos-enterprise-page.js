import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import AboveFoldBlock from "../components/home/AboveFoldBlock";
import SmartFormsBlock from "../components/home/SmartFormsBlock";
import FeaturesBlock from "../components/home/FeaturesBlock";
import OneStopBlock from "../components/home/OneStopBlock";
import BackOfficeBlock from "../components/home/BackOfficeBlock";
import ReviewBlock from "../components/home/ReviewBlock";
import CallToActionBlock from '../components/home/CallToActionBlock'

export const RulesPageTemplate = ({
  smartTitle,
  smartDescription,
  reviewQuote1,
  reviewAuthor1,
  oneStopTitle,
  oneStopDescription,
  backOfficeTitle,
  backOfficeDescription,
  reviewQuote2,
  reviewAuthor2
}) => (
  <PageWrapper>
    <AboveFoldBlock />
    <FeaturesBlock />
    <SmartFormsBlock title={smartTitle} description={smartDescription} />
    <ReviewBlock quote={reviewQuote1} author={reviewAuthor1} />
    <OneStopBlock title={oneStopTitle} description={oneStopDescription} />
    <BackOfficeBlock
      title={backOfficeTitle}
      description={backOfficeDescription}
    />
    <ReviewBlock quote={reviewQuote2} author={reviewAuthor2} />
    <CallToActionBlock />
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
  query RulesPageTemplate {
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
  smartDescription: PropTypes.string
};

const PageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});
