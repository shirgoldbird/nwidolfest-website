import React from  'react'
import { makeStyles } from '@material-ui/styles'
import { GatsbyImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
  marqueeBar: {
    overflow: 'hidden',
    maxwidth: '100vw',
    position: 'relative',
    display: 'flex',
    userSelect: 'none',
    gap: '2px'
  },
  marqueeInner: {
    display: 'flex',
    flexShrink: 0,
    grap: '2px',
    minWidth: '100%',
    position: 'relative',
    animation: '$marquee 30s linear infinite',
    '& > *': {
    }
  },
  '@keyframes marquee': {
    'from':   { transform: 'translateX(0%)' },
    'to': { transform: 'translateX(calc(-100% - 2px))' }
  },
}))


const ImageMarquee = (props) => {
  const classes = useStyles();

  const imageFiles = props.images;
  return (
      <div className={classes.marqueeBar}>
        <div className={classes.marqueeInner} style={{animationDuration: props.animationDuration}}>
          {imageFiles.map(img => <GatsbyImage key={img.relativePath} image={img.childImageSharp.gatsbyImageData} alt="Prior event" />)}
        </div>
        <div className={classes.marqueeInner} style={{animationDuration: props.animationDuration}}>
          {imageFiles.map(img => <GatsbyImage key={img.relativePath} image={img.childImageSharp.gatsbyImageData} alt="Prior event" />)}
        </div>
      </div>
  )
}

export default ImageMarquee
