import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ArticleCard from "./article-card"
import Bar from "./bar"
import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'


const Articles = () => {
  return(
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: {fields: frontmatter___priority, order: DESC}, limit: 3, filter: {frontmatter: {type: {eq: "article"}}}) {
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

        console.log(articles);
        return (
          <Grid container spacing={3} style={{ textAlign: "center", marginTop: 25 }}>
            <Grid
              item
              xs={12}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h5">A little bit more about me</Typography>
              <Bar />
            </Grid>
            {articles.map(( article ) => (
              <Grid item xs={12} sm={4} key={article.node.id}>
                <ArticleCard article={article.node} />
              </Grid>
            ))}

            <Grid item xs={12}>
              <Link to='/my-articles' color='inherit'>
                <Button variant="outlined" color="primary" size="large">
                  View All
                </Button>
              </Link>
            </Grid>
          </Grid>
        )
      }}
    />
  )
}
export default Articles
