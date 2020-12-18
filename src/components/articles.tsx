import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Bar from "./bar"
import { Link } from 'gatsby'
import ArticlesDeck from "./articles-deck"


const Articles = () => {
  return(
    <Grid container spacing={3} style={{ textAlign: "center", marginTop: 25 }}>
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5">A little bit more about myself</Typography>
        <Bar />
      </Grid>

      <ArticlesDeck limit={3}/>

      <Grid item xs={12}>
        <Link to='/my-articles' color='inherit'>
          <Button variant="outlined" color="primary" size="large">
            View All
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}
export default Articles
