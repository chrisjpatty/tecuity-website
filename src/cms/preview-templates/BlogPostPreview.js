import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/news-post'
import Environment from '../Environment'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <Environment>
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={entry.getIn(['data', 'tags'])}
      title={entry.getIn(['data', 'title'])}
    />
  </Environment>
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
