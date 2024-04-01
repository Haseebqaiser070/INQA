import { Typography } from '@mui/material';
import React from 'react';

export default function Hero() {
  return (
    <div>
      <div  className="hero-top-section" data-section>
        <div className="container-fluid py-5 mx-auto">
          <div className="container text-center py-5">
            <Typography className="fs-1">Betriebsklima stärken – und das mit 80 % Förderung!</Typography>
            <Typography className="fs-5 col-lg-9 col-12 mb-5 mt-4 mx-auto text-center">
              Für die Gesundheit Ihrer Mitarbeiter sowie für Ihre optimale Unternehmens- und Führungskultur
            </Typography>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-md-5 mt-3 mb-md-3 mb-2">
        <img src="/assets/images/covers/hero.png" className="w-100" alt="" srcset="" />
      </div>
    </div>
  );
}
