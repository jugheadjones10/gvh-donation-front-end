/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, {useEffect, useState} from "react";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
 import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Container from '@mui/material/Container';

import { useTheme } from "@mui/styles";
import styled from "@emotion/styled";


function FontsLookbook() {

  return (
    <Box m={20}>
      <Typography fontFamily="CooperHewitt-Medium" fontSize="h2.fontSize">Lorem Ipsum</Typography>
      <Typography fontFamily="CooperHewitt-Book" fontSize="h2.fontSize">Lorem Ipsum</Typography>
      <Typography fontFamily="CooperHewitt-Semibold" fontSize="h2.fontSize">Lorem Ipsum</Typography>
      <Typography fontFamily="CooperHewitt-Heavy" fontSize="h2.fontSize">Lorem Ipsum</Typography>
      <Typography fontFamily="Fira Sans" fontWeight={400} fontSize="h6.fontSize">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <Typography fontFamily="CooperHewitt-Medium" fontSize="h6.fontSize">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <Typography fontFamily="Fira Sans" fontWeight={300} fontSize="h2.fontSize">Lorem Ipsum</Typography>
      <Typography fontFamily="Fira Sans" fontWeight={400} fontSize="h2.fontSize">Lorem Ipsum</Typography>
      <Typography fontFamily="Fira Sans" fontWeight={500} fontSize="h2.fontSize">Lorem Ipsum</Typography>
      <Typography fontFamily="Fira Sans" fontWeight={600} fontSize="h2.fontSize">Lorem Ipsum</Typography>
      <Typography fontFamily="Fira Sans" fontWeight={900} fontSize="h2.fontSize">Lorem Ipsum</Typography>
    </Box>
  );
}

export default FontsLookbook
