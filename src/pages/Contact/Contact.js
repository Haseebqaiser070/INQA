import React from 'react';
import Calendly from './Calendly';
import { Typography, Button } from '@mui/material';
import Iconify from 'src/components/iconify/Iconify';
import { useNavigate } from 'react-router-dom';
export default function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hero-top-section">
        <div className="container-fluid py-5 mx-auto">
          <div className="container text-center py-5">
            <div className="d-flex col-12 justify-content-start">
              <Button
                onClick={() => navigate(-1)}
                startIcon={<Iconify icon="ic:baseline-less-than" />}
                className="text-muted"
              >
                Zurück
              </Button>
            </div>
            <Typography className="fs-1">
              Möchten Sie uns kennenlernen?
              <br />
              Nehmen Sie gerne Kontakt mit uns auf
            </Typography>
            <Typography className="col-lg-9 col-12 fs-5 mb-5 mt-4 mx-auto text-center">
              Wir freuen uns von Ihnen zu hören{' '}
            </Typography>
          </div>
        </div>
      </div>
      <Calendly />
      <div className="col-12 d-flex my-5 justify-content-center">
        <Button variant="contained" className="px-5">
          Anfrage abschicken
        </Button>
      </div>

      <div className="contact-section-home" style={{ height: '350px' }}>
        <div className="container-fluid py-5 mx-auto">
          <div className="container text-center pt-5">
            <Typography className="fs-1">Kontaktieren Sie uns</Typography>
            <Typography className="col-lg-9 col-12 mb-5 mt-4 mx-auto fs-5 text-center">
              Schnetzen 1/1 | 88276 Berg | hallo@lauenroth-gmbh.de | 07504 971 82 42
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
