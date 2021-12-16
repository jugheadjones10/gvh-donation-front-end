/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import {Container} from "../payment-methods/StyledComponents";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import styled from "@emotion/styled";

import PaymentMethod from "../payment-methods/PaymentMethod"

import image1 from "./paintings/image1.webp"
import image2 from "./paintings/image2.webp"
import image3 from "./paintings/image3.webp"
import image4 from "./paintings/image4.webp"
import image5 from "./paintings/image5.webp"
import image6 from "./paintings/image6.webp"
import image7 from "./paintings/image7.webp"

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
}));

const paintingsData = [
  {image: image1, rotation: 0, painter: "Jack", age: 12, from: "my home"},
  {image: image2, rotation: 0,painter: "Jack", age: 12, from: "my home"},
  {image: image3, rotation: 90,painter: "Jack", age: 12, from: "my home"},
  {image: image4, rotation: 0,painter: "Jack", age: 12, from: "my home"},
  {image: image5, rotation: 0,painter: "Jack", age: 12, from: "my home"},
  {image: image6, rotation: 0,painter: "Jack", age: 12, from: "my home"},
  {image: image7, rotation: 90,painter: "Jack", age: 12, from: "my home"}
]

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function auctionSubmit( values, painterData){

  const api = process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_AUCTION
    : process.env.REACT_APP_PROD_AUCTION

  values.painter = painterData.painter

  return fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values, null, 2),
  })
    .then((res) => res.json()) 
    .then((json) => {
      console.log("JSON", json)
      return { refid: json.ID, qrUrl: json.qrUrl }; 
    }); 
}

function Auction() {
  const [open, setOpen] = useState([false, false, false, false, false, false, false]);

  const handleClickOpen = (index) => {
    const original = [false, false, false, false, false, false, false]
    original[index] = true
    setOpen(original);
  };

  const handleClose = (index) => {
    const original = [false, false, false, false, false, false, false]
    setOpen(original);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>

      <Typography css={{padding: "50px"}} variant="body1">
        GVH Santa Mission 2021 Art Gallery! 
      <br/>
      <br/>
 
Thank you so much for offering your support to this year's Santa Mission!  
 
      <br/>
      <br/>
Like previous years, we aim to raise S$4000 which will be used to purchase brand new T-shirts for all the 250 children we are supporting in Myanmar as well as to give them a memorable Christmas meal in this once-a-year joyous occasion. 
 
      <br/>
      <br/>
        Do follow us on <a href="www.facebook.com/Globalvillageforhope">www.facebook.com/Globalvillageforhope</a> for latest updates of our Santa Mission Project. 
 
      <br/>
      <br/>
These art pieces are hand drawn by the children from the various children homes in Myanmar which they would like to gift to donors and volunteers like yourself as a way to show their gesture of gratitude. 
 
      <br/>
      <br/>
Out of more than 200 pictures drawn, these are the highest rated ones by our GVH volunteers and we managed to find a way to transport these physical copies to Singapore and they are with us in Singapore now!! 
 
      <br/>
      <br/>
Please click on the art pieces that you would like to donate to. If you are the highest donor of a particular art piece, we will mail the original physical version to you on behalf of the children. 
 
      <br/>
      <br/>
You may donate to more than 1 piece of art!  
 
      <br/>
Thank you so much to being the 'Secret Santa' of these children!
      </Typography>

      <Grid container alignItems="center" >
        {
          paintingsData.map((paintingData, index) => {
            return <Grid item xs={12} sm={6}  md={4}>
              <Item>
                <Stack>
                  <img width="100%" src={paintingData.image}/>
                  <Box
                    sx={{
                      fontSize: 'h6.fontSize',
                      p: 1,
                      color: "text.secondary",
                    }}
                  >
                    {`${paintingData.painter}, ${paintingData.age}`}
                    <br/>
                    {`from ${paintingData.from}`}
                  </Box>

                  <Button onClick={() => {handleClickOpen(index)}} variant="outlined">Donate Now</Button>

                  <Dialog
                    fullScreen
                    open={open[index]}
                    onClose={() => {handleClose(index)}}
                    TransitionComponent={Transition}
                  >
                    <AppBar sx={{ position: 'relative' }}>
                      <Toolbar>
                        <IconButton
                          edge="start"
                          color="inherit"
                          onClick={handleClose}
                          aria-label="close"
                        >
                          <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                          Donate to {paintingData.painter}'s painting 
                        </Typography>
                      </Toolbar>
                    </AppBar>

                    <PaymentMethod 
                      method="paynowpaintings" 
                      post={(values) => auctionSubmit(values, paintingData)}/>

                    <PaymentMethod 
                      method="qrcodepaintings" 
                      post={(values) => auctionSubmit(values, paintingData)}/>

                  </Dialog>
                </Stack>
              </Item>
            </Grid>
          })
        }
      </Grid>
    </Box>
  );
}

export default Auction;
