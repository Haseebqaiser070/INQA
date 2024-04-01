import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Cpntact() {
  return (
    <div>
      <div className="contact-section-home">
        <div className="container-fluid py-5 mx-auto">
          <div className="container text-center pt-5">
            <Typography className="fs-1">Möchten Sie uns kennenlernen?</Typography>
            <Typography className="col-lg-9 col-12 mb-5 mt-4 mx-auto fs-5 text-center">
              Nehmen Sie gerne Kontakt mit uns auf. Wir freuen uns <br /> von Ihnen zu hören!{' '}
            </Typography>
          </div>
          <div className="col-12 d-flex mb-5 justify-content-center">
            <Link to="/contact" className=" mx-auto">
              <Button variant="contained" className="px-5">
                Unverbindliches Beratungsgespräch anfragen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
