import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const BodyTexts = ({ bodytexts }) => (
  <div>
    {bodytexts.map((bodytext) => (
      <article key={v4()} className="bodytext">
        <div className="bodytext-content">
          <p>{bodytext.paragraph}</p>
          
        </div>
      </article>
    ))}
  </div>
)

BodyTexts.propTypes = {
  bodytexts: PropTypes.arrayOf(
    PropTypes.shape({
      paragraph: PropTypes.string,
    })
  ),
}

export default BodyTexts
