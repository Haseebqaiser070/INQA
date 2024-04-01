import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import logo1 from '../components/logo/logo1.png';
import { Link } from 'react-router-dom';
import Iconify from 'src/components/iconify';
import { useLocation } from 'react-router-dom';

const FooterDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.logo[0], 1),
}));
export default function Footer() {

  const location = useLocation();
  const isDashboardAppRoute = location.pathname === '/dashboard/app';

  return (
    <FooterDiv className={`container-fluid pt-5 ${isDashboardAppRoute ? '' : 'mt-5'} pb-4`} style={{ zIndex: '2' }}>
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-3 col-md-5 col-sm-7 col-12">
            <p className="text-white font-bold">A Product of</p>
            <img src={logo1} style={{ maxWidth: '240px' }} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mt-2 d-flex justify-content-sm-start justify-content-center align-items-center">
            <Link className="text-white me-md-4 me-sm-3 me-2 text-decoration-none" to="/contact">
              Contact
            </Link>
            <Link className="text-white mx-md-4 mx-sm-3 mx-2 text-decoration-none" to="/privacy">
              Privacy Policy
            </Link>
            <Link className="text-white mx-md-4 mx-sm-3 mx-2 text-decoration-none" to="/imprint">
              Imprint
            </Link>
          </div>
          <div className="col-sm-6 d-flex justify-content-sm-end justify-content-center mt-2">
            <Iconify width="50px" className="mx-md-4 mx-sm-3 mx-2" icon="fa6-brands:linkedin" />
            <Iconify width="50px" className="mx-md-4 mx-sm-3 mx-2" icon="fa6-brands:square-xing" />
            <Iconify width="50px" className="ms-md-4 ms-sm-3 ms-2" icon="fa6-brands:square-facebook" />
          </div>
        </div>
      </div>
    </FooterDiv>
  );
}
