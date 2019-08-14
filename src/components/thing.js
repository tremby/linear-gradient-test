import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const ProductChart = () => {
  const {
    background: {
      childImageSharp: { fluid: backgroundFluid },
    },
  } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "art-artisan-artist-2378538.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Container
      fluid={['linear-gradient(to bottom, pink, transparent)', backgroundFluid]}
      backgroundColor={'#cccccc'}
    >
      <p>This should have an image background overlaid with a gradient, so it should be pink at the top.</p>
    </Container>
  )
}

const Container = styled(BackgroundImage).attrs({
  Tag: 'section',
})`
  height: 500px;
`

export default ProductChart
