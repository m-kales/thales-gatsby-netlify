import React from 'react'
import PropTypes from 'prop-types'
import { WordsPageTemplate } from '../../templates/words-page'

const WordsPagePreview = ({ entry, widgetFor }) => (
  <WordsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

WordsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WordsPagePreview
