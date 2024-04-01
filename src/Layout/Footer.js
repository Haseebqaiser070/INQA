import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import logo1 from '../components/logo/logo1.png';
import { Link } from 'react-router-dom';
import Iconify from 'src/components/iconify';
import { useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { navItems } from './NavItems';
import { Typography } from '@mui/material';

const FooterDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.logo[0], 1),
}));
export default function Footer() {
  const location = useLocation();
  const isDashboardAppRoute = location.pathname === '/dashboard/app';

  return (
    <FooterDiv className="container-fluid pt-5 pb-5" style={{ zIndex: '2' }}>
      <div className="container text-white pt-3 pb-3">
        <div className="row pt-3">
          <div className="col-lg-4 col-md-6 my-2 col-12">
            <img src={logo1} style={{ maxWidth: '240px' }} />
            <div className="col-12 d-flex flex-wrap">
              <div className="col-sm-6">
                <List>
                  {navItems.map((item, index) => (
                    <Link className="text-decoration-none text-white" to={item.link}>
                      <ListItem key={index} disablePadding>
                        <Typography className="ps-0 py-2" sx={{ textAlign: 'left' }}>
                          <ListItemText primary={item.label} />
                        </Typography>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </div>
              <div className="col-sm-6 d-flex">
                <List className="mt-auto">
                  <Link className="text-decoration-none text-white" to="/">
                    <ListItem disablePadding>
                      <Typography className="ps-0 py-2" sx={{ textAlign: 'left' }}>
                        <ListItemText primary="Datenschutz" />
                      </Typography>
                    </ListItem>
                  </Link>
                  <Link className="text-decoration-none text-white" to="/">
                    <ListItem disablePadding>
                      <Typography className="ps-0 py-2" sx={{ textAlign: 'left' }}>
                        <ListItemText primary="Impressum" />
                      </Typography>
                    </ListItem>
                  </Link>
                </List>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 my-2 d-flex  justify-content-center mt-2 ">
            <a
              className="mx-md-4 text-decoration-none text-white mt-auto mx-sm-3 mx-2"
              target="_blank"
              href="https://www.linkedin.com/in/jörg-lauenroth-1bb82953"
            >
              <Iconify width="50px" icon="fa6-brands:linkedin" />
            </a>
            <a
              className="mx-md-4 text-decoration-none text-white mt-auto mx-sm-3 mx-2"
              target="_blank"
              href="https://www.xing.com/profile/Joerg_Lauenroth/portfolio"
            >
              <Iconify width="50px" icon="fa6-brands:square-xing" />
            </a>
            <a
              className="ms-md-4 text-decoration-none text-white mt-auto ms-sm-3 ms-2"
              target="_blank"
              href="https://www.facebook.com/Lauenrothpotenzialtraining"
            >
              <Iconify width="50px" icon="fa6-brands:square-facebook" />
            </a>
          </div>
          <div className="col-lg-4 d-flex flex-wrap my-2 justify-content-center col-md-6 col-12 footer-last-section">
            <Typography variant="h4" className="col-lg-7 mt-auto col-12">
              Kontaktieren Sie uns
            </Typography>
            <div className="col-lg-7 my-3 mt-auto  col-12 ">
              <Typography className="col-12">Schnetzen 1/1</Typography>
              <Typography className="col-12">88276 Berg</Typography>
            </div>
            <div className="col-lg-7 my-3 mt-auto  col-12">
              <Typography className="col-12">Rufen Sie uns an</Typography>
              <Typography className="col-12">
                <Iconify icon="iconamoon:phone-fill" />
                <a href="tel:+075049718242" className="text-white text-decoration-none">
                  07504 971 82 42
                </a>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </FooterDiv>
  );
}
