import { Typography } from '@mui/material';
import React from 'react';

export default function Quote() {
  return (
    <>
      <div className="container section">
        <Typography className="text-center fs-5 ">Unternehmenskultur: „Weicher Faktor“ mit harten Folgen</Typography>
        <Typography className="text-center fs-5 my-4 mt-5">
          Kultur macht einen entscheidenden Unterschied – sowohl für das Wohlbefinden Ihrer Mitarbeiter, als auch für
          Ihre betriebswirtschaftliche Zahlen. Innen wie außen: Welches Ansehen Ihr Unternehmen im Markt genießt, wird
          nicht allein von Ihren Produkten bestimmt, sondern auch von der Art, wie Sie und Ihre Mitarbeiter
          untereinander und mit Kunden umgehen, sprich: Eine gute Unternehmenskultur.
        </Typography>
      </div>
      <div className="container-fluid text-white section" style={{ backgroundColor: '#B55C78' }}>
        <div className="container">
          <Typography className="fs-1 text-justify text-center">
            „Die Unternehmenskultur ist der einzige nachhaltige Wettbewerbsvorteil, der vollständig in der Hand des
            Unternehmers/Geschäftsführers liegt. Entwickeln Sie zuallererst eine starke Unternehmenskultur.{' '}
          </Typography>
          <Typography className="text-center fs-4 my-4 mt-5">David Cummings</Typography>
        </div>
      </div>
    </>
  );
}
