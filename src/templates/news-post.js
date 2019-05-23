import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  date,
  prev,
  next
}) => {
  const PostContent = contentComponent || Content;
  return (
    <Wrapper>
      {helmet || ""}
      <Title>{title}</Title>
      <DateWrapper>{date}</DateWrapper>
      <ContentWrapper>
        <PostContent content={content} />
      </ContentWrapper>
      <PaginationWrapper noPrev={!prev}>
        {prev && (
          <Link to={prev.slug} className="prev">
            <PrevIcon />
            <TitlePreview>
              {`${prev.title.slice(0, 30)}${
                prev.title.length > 30 ? "..." : ""
              }`}
            </TitlePreview>
          </Link>
        )}
        {next && (
          <Link to={next.slug} className="next">
            <TitlePreview>
              {`${next.title.slice(0, 30)}${
                next.title.length > 30 ? "..." : ""
              }`}
            </TitlePreview>
            <NextIcon />
          </Link>
        )}
      </PaginationWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")(
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "6vh"
  },
  ({ theme }) => ({
    [theme.media.max.sm]: {
      paddingLeft: 20,
      paddingRight: 20
    }
  })
);

const Title = styled("h1")(
  {
    width: "100%",
    maxWidth: 800,
    textAlign: "center",
    fontWeight: 300,
    fontSize: 40
  },
  ({ theme }) => ({
    color: theme.dark.color
  })
);

const DateWrapper = styled("div")(
  {
    fontStyle: "italic"
  },
  ({ theme }) => ({
    color: theme.mid.color
  })
);

const PaginationWrapper = styled("div")(
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: 700,
    padding: "20px 0px",
    marginBottom: 50
  },
  ({ theme, noPrev }) => ({
    justifyContent: noPrev ? "flex-end" : "space-between",
    "& a": {
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      color: theme.mid.color,
      textDecoration: "none",
      "& span": {
        padding: "5px 10px",
        opacity: 0,
        color: theme.primary.color,
        transition: "opacity 200ms"
      },
      "&:hover": {
        "& svg": {
          stroke: theme.primary.color
        },
        "& span": {
          opacity: 1
        }
      },
      "& svg": {
        stroke: theme.mid.rgbaFunction(0.6),
        width: 30
      }
    },
    [theme.media.max.sm]: {
      flexDirection: "column-reverse",
      "& a.prev": {
        alignSelf: "flex-start"
      },
      "& a.next": {
        alignSelf: "flex-end",
        marginBottom: 20
      },
      "& a span": {
        opacity: 1,
        color: theme.mid.color
      }
    }
  })
);

const TitlePreview = styled("span")({});

const ContentWrapper = styled("article")(
  {
    width: "100%",
    maxWidth: 700,
    lineHeight: 1.45,
    fontWeight: 300,
    fontSize: 18
  },
  ({ theme }) => ({
    color: theme.dark.color
  })
);

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  excerpt: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data: { prev, next, current } }) => {
  return (
    <Layout>
      <BlogPostTemplate
        content={current.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`Tecuity | ${current.frontmatter.title}`}</title>
            <meta name="excerpt" content={`${current.excerpt}`} />
          </Helmet>
        }
        title={current.frontmatter.title}
        date={current.frontmatter.date}
        prev={
          prev
            ? { slug: prev.fields.slug, title: prev.frontmatter.title }
            : null
        }
        next={
          next
            ? { slug: next.fields.slug, title: next.frontmatter.title }
            : null
        }
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!, $prevId: String!, $nextId: String!) {
    prev: markdownRemark(id: { eq: $prevId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    current: markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 95)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
    next: markdownRemark(id: { eq: $nextId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

const PrevIcon = props => (
  <svg viewBox="0 0 113.31 111.11" {...props}>
    <title>{"prev"}</title>
    <g data-name="Layer 2">
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={10}
        data-name="Layer 1"
      >
        <path d="M55.55 5L5 55.55l50.55 50.56M5 55.56h103.31" />
      </g>
    </g>
  </svg>
);

const NextIcon = props => (
  <svg viewBox="0 0 113.31 111.11" {...props}>
    <title>{"next"}</title>
    <g data-name="Layer 2">
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={10}
        data-name="Layer 1"
      >
        <path d="M57.75 5l50.56 50.55-50.56 50.56M108.31 55.56H5" />
      </g>
    </g>
  </svg>
);
