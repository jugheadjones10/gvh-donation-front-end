/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/styles";

function Preamble() {
  const theme = useTheme();
  return (
    <>
      {/* <Typography variant="h6"> */}
      {/*   1. Select payment method from below <br/> */}
      {/*   2. Complete the attached form <br/> */}
      {/*   <Typography variant="caption"> */}
      {/*   Information from the form will allow us to record the source of the funds */}
      {/*   accurately and use them for their intended purpose. <br /> */}
      {/*   Your information will not be published publicly without your permission */}
      {/*   and your identity will be kept confidential. <br /> */}
      {/*   <br /> */}
      {/*   </Typography> */}

      {/*   3. Follow the instructions displayed when the form is submitted */}

      {/*   Submission of the form only indicates intention to donate. */} 
      {/*   You will receive an email from us confirming your intention, */}
      {/*   and a second email to confirm donation when we successfully receive your donation. */}
      {/* </Typography> */}
      <Typography
        variant="body2"
        css={{ color: theme.palette.text.secondary }}
        gutterBottom
      >
        Thank you so much for your interest in funding our various projects!
        <br />
        <br />
        This information will allow us to record the source of the funds
        accurately and use them for their intended purpose. <br />
        Your information will not be published publicly without your permission
        and your identity will be kept confidential. <br />
        <br />
        Feel free to email us at{" "}
        <a
          css={{
            textDecoration: "none",
            color: "black",
          }}
          href="mailto:Globalvillageforhope@gmail.com"
        >
          <b>Globalvillageforhope@gmail.com</b>
        </a>{" "}
        or Whatsapp us at <b css={{ color: "black" }}>+65 88224918</b> if you
        would like to seek clarifications. <br />
      </Typography>
    </>
  );
}
export default Preamble;
