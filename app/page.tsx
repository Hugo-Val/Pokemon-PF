"use client"
import { TextField } from "@mui/material"
import { Button, Grid, Stack } from "@mui/material"
import LandingPageImg from "../public/images/landpage1.jpg"
import  Image   from "next/image"

const LandingPage = () => {
  return (
      <main >
          <div style={{ backgroundImage: `url(${LandingPageImg.src})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw' }}>
              <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', width: '100vw' }}>
                  <Grid item xs={3} md={2} sm={ 1 } >
                      <Stack spacing={2}>
                          <Button variant="contained">Home</Button>
                      </Stack>
                  </Grid>
              </Grid>

          </div>
      
    </main>
  )
}

export default LandingPage
