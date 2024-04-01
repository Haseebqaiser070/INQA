import { Button, Typography } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Iconify from 'src/components/iconify/Iconify';
import { Link } from 'react-router-dom';
const pricingData = [
  {
    title: 'Basic*',
    link: 'basic',
    price: '7',
    cost: 'Das Einstiegspaket',
    lableIcon: '',
    features: ['<b>4</b> Schritte unseres Beratungsansatzes „Siegertreppe“', 'PDF als Erklärungsgrundlage', ,],
  },
  {
    title: 'Premium*',
    link: 'premium',
    price: '9',
    cost: 'Erweiterte Begleitung',
    features: [
      '<b>5</b> Schritte unseres Beratungsansatzes „Siegertreppe“',
      'Schritt-für-Schritt-Anleitung',
      'Durchführung von der Analyse bis zum Bilden des Acrossteams',
      'Online-Befragung zum Entwickeln der Unternehmenskultur',
    ],
  },
  {
    title: 'Gold*',
    price: '12',
    link: 'gold',
    cost: 'Das volle Programm inkl. App',
    features: [
      '<b>7</b> Schritte unseres Beratungsansatzes „Siegertreppe“',
      '2 levels: content admin, user',
      'Durchführung aller Schritte',
      'Online-Befragung zum Entwickeln der Unternehmenskultur',
      'Ihre individuell gestaltete App zum Entwickeln der Unternehmenskultur inkl. Einführung',
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <div id="preis" className="container section">
        <Typography className="fs-1 mb-5 text-center">Preiskategorien</Typography>
        <Typography className="fs-5 mb-5 text-center mx-auto col-lg-9 col-md-10 col-12">
          INQA Unternehmenskultur entwickeln: für Unternehmen bis zu 249 Mitarbeiter können bis zu 80 % der
          Beratungskosten gefördert werden.
        </Typography>

        <div className="row d-flex flex-wrap justify-content-between">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-12 my-2 d-flex mx-auto`}
              style={{ position: 'relative' }}
            >
              <div
                className="col-xl-10 col-lg-12 d-flex flex-wrap p-4 rounded mx-auto"
                style={{ backgroundColor: '#EFF4FF' }}
              >
                {index == 2 ? (
                  <div style={{ position: 'absolute', top: '-16px', right: '100px' }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <Iconify icon="bxs:tag" style={{ color: '#E8D24A' }} rotate={3} width="50px" />
                      <Iconify
                        icon="mdi:star"
                        style={{
                          color: 'white',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          fontSize: '20px', // Adjust the size as needed
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  ''
                )}
                <div>
                  <div className="d-flex align-items-start mb-4">
                    <div className="col ">
                      <Typography variant="h3" className="text-center">
                        {item.title}{' '}
                      </Typography>
                      <Typography className="text-center fs-5">{item.cost}</Typography>
                      <Typography color="primary" className="text-start ms-5 mt-3 fs-4">
                        <span className="ms-3">
                          {' '}
                          AB {item.price} <Iconify className="mt-2" icon="ic:baseline-euro" /> /
                        </span>
                        <br /> <span className="ms-5">/ Mitarbeiter</span>
                      </Typography>
                    </div>
                  </div>
                  {item.features.map((feature, index) => (
                    <ListItem key={index} alignItems="flex-start" className="my-0 py-0">
                      <ListItemAvatar style={{ minWidth: '15px' }}>
                        <Avatar className="me-2 bg-transparent" style={{ width: 'auto' }}>
                          <Iconify icon="mdi:tick" className="text-secondary" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={<div dangerouslySetInnerHTML={{ __html: feature }} />} className="mt-3" />
                    </ListItem>
                  ))}
                </div>

                <div className="col-11 mt-auto pt-3">
                  <Link to="/plans">
                    <Button className="w-100" color="primary" variant="outlined">
                      Mehr erfahren
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12 mt-5">
            <Typography>* Detaillierte Preis-Aufstellung und Infos zum Inhalt unter „mehr erfahren“ </Typography>
          </div>

          <div className="col-12 mt-5 d-flex justify-content-center">
            <Link to="/contact" className=" mx-auto">
              <Button variant="contained">Unverbindliches Beratungsgespräch anfragen</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
