import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import { Link } from 'gatsby'
import styles from "./hero.module.css"

const Hero = () => {
  return (
    <Grid
      container
      spacing={3}
      style={{ minHeight: 500, maxWidth: "100%" }}
      className={styles.container}
    >
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
        <Typography variant="h2" color="inherit" style={{ marginBottom: 20 }}>
          Hi, I'm Marco
        </Typography>

        <Typography variant="subtitle1" style={{ marginBottom: 30 }}>
          I'm a Front-End Web Developer in Leeds.
        </Typography>
        <Link to='/contactme' color='inherit'>
          <Button variant="contained" color="primary" size="large">
            Let's chat
          </Button>
        </Link>
      </Grid>

      <Grid
        item={true}
        sm={6}
        direction="column"
        justify="center"
        alignItems="center"
        className={styles.picture}
        style={{ padding: 10 }}
      >
        <div style={{ width: "100%" }}>
          <Image alt="Marco's profile picture." filename="profile-pic.jpeg" />
        </div>
      </Grid>

    </Grid>
  )
}
export default Hero
