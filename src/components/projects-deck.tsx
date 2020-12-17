import React from "react"
import Grid from "@material-ui/core/Grid"
import ProjectCard from "./project-card"
import { StaticQuery, graphql } from "gatsby"

interface IProps {
  limit?: number;
}

const ProjectsDeck = ({ limit, ...props }: IProps) => {

  return(
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: {fields: frontmatter___priority, order: DESC}, filter: {frontmatter: {type: {eq: "project"}}}) {
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
        const projects = data.allMarkdownRemark.edges

        return (
          <Grid container spacing={3} style={{ textAlign: "center" }}>

            {projects.slice(0, limit).map(( project ) => (
              <Grid item xs={12} sm={4} key={project.node.id}>
                <ProjectCard project={project.node} />
              </Grid>
            ))}

          </Grid>
        )
      }}
    />
  )
}
export default ProjectsDeck
