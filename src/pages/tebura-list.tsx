import React from 'react';
import { Carousel } from '@mantine/carousel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {Image, Text, Badge, Button, Group } from '@mantine/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// import {Slider} from '@/Slider';

// import Product from './components/Slider.txt';

const user_info = (
  <React.Fragment>
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ジャンル
      </Typography> */}
      <Typography variant="h5" component="div">
        ユーザネーム　総所持数○個　
        <Button>ジャンル管理</Button>
      </Typography>
      {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography> */}
        <CardActions>
        </CardActions>
    </CardContent>
  </React.Fragment>
);
const card = (
  <React.Fragment>
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ジャンル
      </Typography> */}
      <Typography variant="h5" component="div">
        ジャンル●個
      </Typography>
      {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography> */}
      <Typography variant="body2">
        持ち物　
        <Button>詳細</Button>
        <CardActions>
        </CardActions>
      </Typography>
    </CardContent>
  </React.Fragment>
);

// const tmp = ref
// const tmp = reactive

export default function OutlinedCard() {
  return (
    <Box sx={{ maxWidth: 2000}}>
      <Card variant="outlined">{user_info}
      {/* <Card variant="outlined">{card}</Card> */}
      {/* <Card variant="outlined">{card}</Card> */}
      </Card>
      <Carousel
		withIndicators
		height={400}
		slideSize="33.333333%"
		slideGap="md"
		loop
		align="start"
		slidesToScroll={3}
	  >
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		<Carousel.Slide>{card}</Carousel.Slide>
		{/* ...other slides */}
	  </Carousel>
    </Box>
    
    
  );
}



