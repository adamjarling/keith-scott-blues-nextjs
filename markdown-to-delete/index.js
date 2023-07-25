import React from "react";
import Layout from "../../components/Layout";
import PhotoGalleryRoll2 from "../../components/PhotoGalleryRoll2";
import HeroImageBg from "../../components/HeroImageBg";
import { graphql } from "gatsby";

const GalleryPage = ({ data }) => {
  return (
    <Layout>
      <HeroImageBg
        title="Photos"
        subtitle="Heros, friends, family"
        bgImage={data.bgImage.childImageSharp.fluid}
      />

      <section className="gallery inner-content section">
        <div className="container content">
          <PhotoGalleryRoll2 />
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;

export const pageQuery = graphql`
  query GalleryPageTemplate {
    bgImage: file(
      sourceInstanceName: { eq: "myimages" }
      relativePath: { eq: "gallery/salmon-roots-blues-2017.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
