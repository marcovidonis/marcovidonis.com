import React from "react"
import Grid from "@material-ui/core/Grid"
import ArticleCard from "./article-card"
import { StaticQuery, graphql } from "gatsby"

interface IProps {
  limit?: number;
}

const ArticlesDeck = ({ limit, ...props }: IProps) => {

  return(
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: {fields: frontmatter___priority, order: DESC}, filter: {frontmatter: {type: {eq: "article"}}}) {
            edges {
              node {
                id
                excerpt
                frontmatter {
                  title
                  img {
                    relativePath
                    name
                  }
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}

      render={data => {
        const articles = data.allMarkdownRemark.edges

        return (
          <Grid container spacing={3} style={{ textAlign: "center", margin: 0 }}>

            {articles.slice(0, limit).map(( article ) => (
              <Grid item xs={12} sm={4} key={article.node.id}>
                <ArticleCard article={article.node} />
              </Grid>
            ))}

          </Grid>
        )
      }}
    />
  )
}
export default ArticlesDeck
