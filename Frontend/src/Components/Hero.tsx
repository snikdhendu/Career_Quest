import React, { FC } from 'react'
// import Image from 'next/image'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
// import { Link as ScrollLink } from 'react-scroll'
// import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
// import BlurIn from "@/components/magicui/blur-in";

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Students',
    value: '10K+',
  },
  {
    label: 'Quality Course',
    value: '20+',
  },
  {
    label: 'Experience Mentors',
    value: '10+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}

const Hero: FC = () => {
  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' }, width: "100%" }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                // border: 2,

              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 66 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      // color: 'textmain',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                    className='text-textmain'
                  >
                    Improve{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 68 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src="/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                  your{' '}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                    career
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path
                          fill="#127C71"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#127C71"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path
                          fill="#127C71"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>{' '}
                  <br />
                  with Different Way
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }} >
                  {
                    "Let's take an online course to improve your skills in a different way, you can set your own study time according to your learning speed. So you san study comfortable and absorb tge material easily."
                  }
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                {/* <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained">
                    Get Started
                  </StyledButton>
                </ScrollLink> */}
                <button className="bg-teal-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  Get Started
                </button>

                <button className="border-2 border-teal-600 text-teal-600 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  Watch Video
                  <PlayArrowIcon />
                </button>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            {/* Sertificate badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 30,
                left: { xs: 0, md: -150 },
                boxShadow: 1,
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'flex-start',
                width: 280,
              }}

            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  '& img': { width: '32px !important', height: 'auto' },
                }}

              >
                {/* <Image src="/images/certificate.png" alt="Certificate icon" width={50} height={50} quality={97} /> */}
                <img src="/certificate.png" alt="haha" width={50} height={50} />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}
                  className='text-textsecond'
                >
                  Certificate
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>
                  There are certificates for all courses.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ lineHeight: 0 }}>
              {/* <Image src="/images/home-hero.jpg" width={775} height={787} alt="Hero img" /> */}
              <img src="/home-hero.jpg" alt="" width={775} height={787} />
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
        <div className="shadow-lg py-4 px-7 rounded-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3">
              <div className="bg-white p-4 rounded-lg flex justify-center items-center flex-col gap-2">
               
                <p className="text-textsecond text-4xl font-bold">10K+</p>
                <h3 className="text-2xl font-bold mb-4">Students</h3>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-white p-4 rounded-lg flex justify-center items-center flex-col gap-2">
                
                <p className="text-textsecond text-4xl font-bold">20+</p>
                <h3 className="text-2xl font-bold mb-4">Quality Course</h3>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-white p-4 rounded-lg flex justify-center items-center flex-col gap-2">
               
                <p className="text-textsecond text-4xl font-bold">10+</p>
                <h3 className="text-2xl font-bold mb-4">Experience Mentors</h3>
              </div>
            </div>
          </div>
        </div>


      </Container>
    </Box>
  )
}

export default Hero
