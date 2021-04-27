import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { kebabCase } from 'lodash'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <AniLink
                      paintDrip
                      hex="#f09b0d"
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </AniLink>
                    <span> &bull; </span>
                    <span className="subtitle is-size-6 is-block">
                      {post.frontmatter.date}
                    </span>
                    <span>{post.frontmatter.description}</span>
                    <br />
                    <br />
                    <AniLink 
                      className="button" 
                      paintDrip
                      hex="#f09b0d" 
                      to={post.fields.slug}>
                        Keep Reading →
                    </AniLink>
                  </p>
                </header>
                {post.frontmatter.tags && post.frontmatter.tags.length ? (
                    <div className="is-size-6 roll-tags">
                    <span>Tags:</span>
                      <ul className="taglist">
                        {post.frontmatter.tags.map((tag) => (
                          <li key={tag + `tag`}>
                            <AniLink 
                              cover 
                              direction="up" 
                              bg="#f09b0d" 
                              to={`/tags/${kebabCase(tag)}/`}>{tag}
                            </AniLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    ) : null}
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                tags
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 220, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
