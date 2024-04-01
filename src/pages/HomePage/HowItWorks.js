import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <>
      <div id="kontakt" className="container-fluid section" style={{ backgroundColor: '#EFF4FF' }}>
        <Typography className="text-center fs-1">So funktioniert’s </Typography>
        <Typography className="fs-5 my-5 py-3 text-center  col-lg-6 col-md-8 col-12 mx-auto ">
          Treten Sie gerne mit uns in Kontakt, um Ihr INQA-Erstgespräch zu führen – <br></br>bequem per 15-minütigem
          Teams-Anruf mit Jörg Lauenroth.
        </Typography>

        <div className="col-12 d-flex mt-5 pt-2 mb-1">
          <Link to="/contact" className=" mx-auto">
            <Button variant="contained" className="px-5">
              Erstgespräch vereinbaren
            </Button>
          </Link>
        </div>
      </div>
      <div className="container-fluid text-white section" style={{ backgroundColor: '#8DB6A6' }}>
        <div className="container">
          <Typography className="fs-1 text-justify text-center">
            „Das Herzstück der Unternehmenskultur ist die <br/> Kommunikation zwischen den Menschen“{' '}
          </Typography>
          <Typography className="text-center fs-4 my-4 mt-5">David Cummings</Typography>
        </div>
      </div>
    </>
  );
}
