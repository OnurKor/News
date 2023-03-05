import React from 'react'
import { Container, Link, Typography, Box } from '@mui/material'
import ResumePDF from '../../../assets/OnurKordoğan.pdf';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Typewriter from 'typewriter-effect';

function Index() {
  return (
    <Container id="#" sx={{ minHeight: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "80px", fontSize: "40px", color: "darkBlue", fontWeight: "bold" }}>

        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('I ')
              .pauseFor(1000)
              .typeString(' am Frontend Developer💻')
              .pauseFor(1000)
              .deleteChars(24)
              .pauseFor(1000)
              .typeString('💗 coding...')
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(500)
              .typeString('Html Css JavaScript React😎')
              .pauseFor(1000)
              .start();
          }}
        />

        <Link
          href={`${ResumePDF}`}
          target='_blank'
          sx={{
            textDecoration: "none",
            textAlign: "center",
            position: "absolute",
            top: { xs: "78%", sm: "60%" },
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <CloudDownloadIcon sx={{
            fontSize: { xs: "40px", sm: "60px" },
            color: "#666",
            '&:hover': {
              transform: 'scale(1.2)',
              color: "#ec704c",
              transition: "all",
              transitionDuration: "500ms"
            },
          }} />
          <Typography sx={{ fontSize: "18px", color: "#666" }}>
            Resume
          </Typography>
        </Link>

        <Link href="#summary"
          sx={{
            textDecoration: "none",
            textAlign: "center",
            position: "absolute",
            top: { xs: "88%", sm: "84%" },
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <KeyboardDoubleArrowDownIcon
            sx={{
              fontSize: { xs: "28px", sm: "36px" },
              color: "#666",
              '&:hover': {
                transform: 'scale(1.2)',
                color: "#ec704c",
                transition: "all",
                transitionDuration: "500ms"
              },
            }}
          />
          <Typography sx={{ fontSize: "18px", color: "#666" }}>
            Summary
          </Typography>
        </Link>

      </Box>

    </Container>
  )
}

export default Index