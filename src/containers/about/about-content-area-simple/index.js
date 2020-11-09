import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Container } from "reactstrap";
import {
  AboutContentWrap,
  Section,
  Emphasis,
  Underlined,
  Details,
} from "./about-content-area-simple.stc";
import { AuthorImg } from "../../global/author-offcanvas/author-offcanvas.stc";

const SimpleAboutContentArea = (props) => {
  const authorData = useStaticQuery(graphql`
    query AboutPageQuery {
      allAuthorsJson {
        edges {
          node {
            name
            image {
              childImageSharp {
                fixed(width: 200, height: 200, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  const { name, image } = authorData.allAuthorsJson.edges[0].node;

  return (
    <AboutContentWrap>
      <Container>
        <AuthorImg>
          <Img fixed={image.childImageSharp.fixed} alt={name} />
        </AuthorImg>

        <Section>
          <h3>I'm a Full-Stack Developer who creates modern GIS web apps</h3>

          <h5>Too much jargon? Here's what that really means:</h5>
          <ul>
            <li>I build web apps that utilize maps and geographic data</li>
            <li>
              I'm an experienced coder who can work on the backend and the
              frontend of applications that are accessed through a web browser.
            </li>
            <li>
              I have strong programming skills in Java, Python (Flask, Django),
              and JavaScript (React, Node)
            </li>
          </ul>
        </Section>

        <Section>
          <h3>Work with me</h3>

          <Emphasis>I'm accepting clients for 2021!</Emphasis>

          <h5>
            Here's why you should pick me to lead the development of your next
            project
          </h5>

          <div>
            <Details>
              <Underlined>I specialize in GIS products</Underlined>
              <p>
                It takes time to get familiar with geospatial development. I've
                already built GIS products. I can leverage modern open-source
                GIS tools like:
              </p>
              <ul>
                <li>Mapbox</li>
                <li>OpenLayers</li>
                <li>PostGIS</li>
                <li>GDAL</li>
                <li>GeoPandas</li>
              </ul>
            </Details>

            <Details>
              <Underlined>
                I know what it takes to rapidly deliver quality software
              </Underlined>
              <p>
                I've learned how to do this throughout my eight years of IT and
                programming experience:
              </p>
              <ul>
                <li>
                  I provided IT support for the University of Wisconsin from
                  2012 - 2015.
                </li>
                <li>
                  I leveraged that experience to get System Administration and
                  DevOps roles for the City of Madison, a law firm, and a tech
                  startup.
                </li>
                <li>
                  Although I've been coding since 2012, I finally got paid to do
                  it full-time for a startup in 2017. In 2019 I joined an
                  international company and was the sole developer behind many
                  web apps that went to market. Throughout the last three years,
                  I've also been developing for businesses on a contract basis.{" "}
                </li>
              </ul>
            </Details>
            <p>
              But don't take my word for it -- checkout{" "}
              <Link to="/blog/category/demos">my past projects</Link>,
              <a href="https://github.com/tyler-hitzeman"> my code</a>, and my{" "}
              <a href="https://stackoverflow.com/users/7781935/ty-hitzeman">
                developer reputation
              </a>
            </p>
          </div>
        </Section>

        <Section>
          <h3>Ready to get to work?</h3>
          <p>
            <a href="https://forms.gle/cNYaLepbJHVLFMcLA">Get in touch</a>- I'd
            love to hear from you
          </p>
        </Section>

        <Section>
          <h3>More about me</h3>
          <p>
            I grew up in Wisconsin and recently moved to Minneapolis, Minnesota.
            When not writing kickass code, I rock climb, visit the dog park, and
            listen to economics podcasts.
          </p>
        </Section>
      </Container>
    </AboutContentWrap>
  );
};

export default SimpleAboutContentArea;
