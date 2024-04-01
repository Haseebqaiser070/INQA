import { Typography } from '@mui/material';
import React from 'react';
const advantagesData = [
  'Mitarbeiterorientiert',
  'Passgenaue Lösungen',
  'Stärken der Wettbewerbsfähigkeit',
  'Nachhaltiges Binden von Fachkräften',
  'Befähigen zum agilen Arbeiten',
  '80 % Förderung',
  'Top-Unternehmenskommunikation durch eine App',
];
export default function BenfitisAtGlance() {
  return (
    <>

      <div className="container-fluid section" style={{ backgroundColor: '#EFEDED' }}>
        <div className="container">
          <Typography className="fs-1 mb-5 text-center">Ihre Vorteile auf einen Blick</Typography>
          <div className="row">
            {advantagesData.map((advantage, index) => (
              <div key={index} className="col-lg-4 mx-auto my-2 col-md-6 col-sm-12 col-12">
                <div className="col-11 p-3 mx-md-0 mx-auto py-4 bg-white rounded">
                  <Typography className="text-center">{advantage}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
