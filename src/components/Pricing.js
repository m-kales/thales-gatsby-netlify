import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Pricing = ({ data }) => (
  <div className="tile is-ancestor">
    {data.map((price) => (
      <div key={price.plan} className="tile is-third is-parent is-vertical">
        <section className="section tile is-child block">
          <div className="block product-img">
            <PreviewCompatibleImage imageInfo={price.prodImg}/>
          </div>
          <h4 className="block has-text-centered has-text-weight-semibold">
            {price.plan}
          </h4>
          <h2 className="block is-size-1 has-text-weight-bold has-text-primary has-text-centered">
            ${price.price}
          </h2>
          <p className="block has-text-weight-semibold">{price.description}</p>
          <ul>
            {price.items.map((item) => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
