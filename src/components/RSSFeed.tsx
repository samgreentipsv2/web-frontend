import { FunctionComponent } from "react";
import rssEnhancer, { InjectionRSSProps } from 'react-rss';
import news from '../assets/NOTICIAS.json';
import Lottie from 'lottie-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



const RSSFeed: FunctionComponent<{ label: string } & InjectionRSSProps<{ hasImage: boolean }>> = props => {
    return (
        <>
            {/* <a href={props.rss.header.link}>
                {props.rss.header.title}
            </a> */}
              <span className=' faq viphdtxt'>
    <h1>Latest News</h1>
    </span>
            <ul>
                {props.rss.items.map((item, i) => (
                    <li key={i}>

<Card sx={{ maxWidth: 345, marginBottom: '60px' }}>
    <CardActionArea>

    <Lottie  animationData={news}/>
    
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
   {item.title}
    </Typography>
    <CardMedia
        component="img"
        height="194"
        alt="Punditville image"
      />
    <Typography variant="body2" color="text.secondary">
    {item.description}
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button target='_blank' href={item.link} size="small" color="info">
    Read More
  </Button>
</CardActions>
</Card>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default rssEnhancer(
    RSSFeed
);




