import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

import classes from '../styles/modules/index-content.module.scss';

export const imgQuery = graphql`
  query {
    pic1: file(relativePath: { eq: "img/shopping_bag.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 380, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pic2: file(relativePath: { eq: "img/watering.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 380, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ({ data }) => {
  return (
    <Layout>
      <div className={classes.wrapper}>
        <div
          className={`${classes.imgContainer} ${classes.left} ${classes.item}`}
        >
          <Img fluid={data.pic1.childImageSharp.fluid} />
        </div>
        <div className={`${classes.item} ${classes.textItem}`}>
          <h2>Zero Waste living yee</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.{' '}
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <div>
            <Link>Read More</Link>
          </div>
        </div>
        <div className={`${classes.item} ${classes.textItem}`}>
          <h2>Zero Waste living yee</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.{' '}
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div>
            <Link>Read More</Link>
          </div>
        </div>
        <div
          className={`${classes.imgContainer} ${classes.right} ${classes.imgOffset} ${classes.item}`}
        >
          <Img fluid={data.pic2.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  );
};
