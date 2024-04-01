import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Phases() {
  return (
    <>
      <div className="container section">
        <Typography className="fs-1 mb-5 text-center">
          Unser gemeinsames INQA-Coaching erfolgt in drei Phasen
        </Typography>
        <div>
          <Typography className="text-start fs-5 my-4">
            1. Initialphase: Aufsetzen des Projekts, Durchführung eines Kick-offs (1 Monat)
          </Typography>
          <Typography className="text-start fs-5 my-4">2. Innovationsphase: Drei Arbeitsphasen (3-4 Monate)</Typography>
          <Typography className="text-start fs-5 my-4">
            3. Lernphase: Erfahrungen und erzielte Ergebnisse werden evaluiert (1 Monat)
          </Typography>
          <Typography className="text-start fs-5 my-4">Für die Durchführung haben wir sieben Monate Zeit</Typography>
          <Typography className="text-start fs-4 text-secondary my-4">
            Hier geht es zum ersten Schritt Ihrer 80 % Förderung{' '}
          </Typography>
          <div className="col-12 d-flex justify-content-center">
            <Link to="/contact" className=" mx-auto">
              <Button variant="contained" className="px-5">
                Jetzt Termin vereinbaren
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
