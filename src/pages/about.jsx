import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

import classes from '../styles/pages/about.module.scss';
import globalClasses from '../styles/modules/global.module.scss';

export const imgQuery = graphql`
  query {
    profile: file(relativePath: { eq: "img/profile.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    plants_in_pots: file(relativePath: { eq: "img/plants_in_pots.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ({ data }) => {
  return (
    <Layout>
      <h2
        className={`${globalClasses.titleHighlighted} ${globalClasses.titleCentered}`}
      >
        Lorem Ipsum
      </h2>
      <div className={classes.imgWrapper}>
        <Img fluid={data.profile.childImageSharp.fluid} />
      </div>
      <div className={classes.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <div className={classes.social}>
        <Link to="/" className={classes.facebook} />
        <Link to="/" className={classes.twitter} />
        <Link to="/" className={classes.linkedin} />
        <Link to="/" className={classes.instagram} />
      </div>
    </Layout>
  );
};
