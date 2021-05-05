import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const FeatureGrid = ({ gridItems }) => (
  <div className="tile is-ancestor">
    {gridItems.map((item) => (
      <div key={item.text} className="tile is-third is-parent is-vertical block has-text-centered">
          <div className="tile is-child has-text-centered">
            <div
              style={{
                width: '200px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <h3>{item.text}</h3>
          <AniLink paintDrip to={item.relatedarticle.slug}>Go</AniLink>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
