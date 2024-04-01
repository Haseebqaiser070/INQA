import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Benifits() {
  const benifits = [
    'Besseres Betriebsklima',
    'Spaß und Erfüllung bei der Arbeit',
    'Gesunde Mitarbeiter',
    'Geringere',
    'Fluktuation',
    'Geringere Krankenquote',
    'Höhere Mitarbeiterbindung',
  ];
  return (
    <>
      <div className="container section">
        <Typography className="text-center fs-1">
          Das 7-Schritte-Programm mit INQA-Coaching – menschlich und zielorientiert in die digitale Zukunft
        </Typography>
        <Typography className="fs-4 my-5 text-center">Ihr Nutzen:</Typography>
        <div className="col-md-10 mx-auto  d-flex flex-wrap text-center justify-content-center">
          {benifits.map((benifit, index) => (
            <Typography
              key={index}
              className="px-3 fs-5 my-2"
              style={index != 0 ? { borderLeft: '2px solid #212B36' } : {}}
            >
              {benifit}
            </Typography>
          ))}
        </div>
        <div className="col-12 d-flex mt-5 pt-2 mb-1">
          <Link to="/contact" className=" mx-auto">
            <Button variant="contained">Unverbindliches Beratungsgespräch anfragen</Button>
          </Link>
        </div>
      </div>
   
    </>
  );
}
