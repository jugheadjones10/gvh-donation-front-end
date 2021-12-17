/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Container } from '@mui/material';

import styled from "@emotion/styled";

const CenteredContainer= styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

export function ResponseContainer(props) {
  return <CenteredContainer {...props} />;
}

// export const Container = styled.div({
//   width: "100%",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// });

// export const CenteredContainer = styled.div({
//   width: "100%",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// });
