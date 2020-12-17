import React from "react"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import Image from "./image"
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"
import { Link } from 'gatsby'

interface IProps {
  article: Article
}

interface Image {
  relativePath: string;
}

interface Frontmatter {
  title: string;
  img: Image
}

interface Field {
  slug: string
}

interface Article {
  title: string
  frontmatter: Frontmatter
  excerpt: string
  fields: Field
}

const ArticleCard = ({ article, ...props }: IProps) => {
  const imgPath: string = article.frontmatter.img.relativePath;
  return (
    <Card>
      <CardMedia image={imgPath}>
        <Image alt={article.frontmatter.title} filename={imgPath} />
      </CardMedia>
      <CardContent style={{ textAlign: "start" }}>
        <Typography variant="h6" color="inherit">
          {article.frontmatter.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {article.excerpt}
        </Typography>
      </CardContent>
      <CardActions style={{ paddingLeft: 20 }}>
        <Link to={article.fields.slug} color="inherit">
          <Button
            size="small"
            color="primary"
          >
            Read More <ArrowRightAltIcon style={{ marginLeft: 5 }} />
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ArticleCard
