import { Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useChat } from 'src/components/ChatContext';
import Iconify from 'src/components/iconify/Iconify';

const data = [
  {
    title: 'Unternehmensform',
    description: 'Ihr Unternehmen ist rechtlich selbstständig, gehört den freien Berufen an oder ist gemeinnützig.',
  },
  {
    title: 'Sitz und Arbeitsstätte',
    description:
      'Beide liegen in Deutschland (im Bundesland der INQA-Beratungsstelle oder in einem angrenzenden Bundesland).',
  },
  {
    title: 'Beschäftigungszahl',
    description:
      'Ihr Unternehmen hat mindestens 1 vollzeitbeschäftigte*n sozialversicherungspflichtige*n Beschäftigte*n (im letzten Geschäftsjahr vor Beginn der Beratung sowie während des INQA-Coachings) sowie insgesamt weniger als 250 Beschäftigte (gemessen in Jahresarbeitseinheiten).',
  },
  {
    title: 'Umsatz',
    description:
      'Ihr Unternehmen hat einen Jahresumsatz von nicht mehr als 50 Mio. Euro bzw. eine Jahresbilanzsumme von nicht mehr als 43 Mio. Euro.',
  },
  {
    title: 'Gründungsjahr',
    description:
      'Ihr Unternehmen besteht seit mindestens 2 Jahren am Markt oder bei Änderung der Rechtsform liegt die Gründung mehr als 5 Jahre zurück (bei Scheckvergabe).',
  },
  {
    title: 'Sonstiges',
    description: 'Darüber hinaus sind weitere Bedingungen zu erfüllen, die im Gespräch mit der IBS geklärt werden.',
  },
];

export default function Eligibile() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { opened, setOpened } = useChat(); // Use the global state

  return (
    <div id="förderung" className="container-fluid section" style={{ backgroundColor: '#EFEDED' }}>
      <div className="container">
        <Typography className="fs-1 mb-5 text-center">Ist Ihr Unternehmen förderfähig?</Typography>
        <div className="row">
          {data.map((item, index) => (
            <div
              style={{ position: 'relative' }}
              key={index}
              role="button"
              className="col-lg-4 mx-auto my-2 col-md-6 col-sm-12 col-12"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                style={{ backgroundColor: hoveredItem === index ? '#EFF4FF' : 'white', border: '2px solid white' }}
                className="col-11 mx-md-0 mx-auto p-3 py-4 rounded"
              >
                <Typography className="text-center">
                  {item.title}{' '}
                  <Iconify
                    className={`my-auto text-secondary ${hoveredItem === index ? 'd-none' : ''}`}
                    icon="ic:round-greater-than"
                  />{' '}
                </Typography>
              </div>
              <div
                style={{
                  position: 'absolute',
                  zIndex: '999999',
                  width: '86.4%',
                  backgroundColor: '#EFF4FF',
                  border: '2px solid white',
                }}
                className={` p-3 py-4 mt-1 rounded ${hoveredItem === index ? '' : 'd-none'}`}
              >
                <Typography className="text-center">{item.description}</Typography>
              </div>
            </div>
          ))}
          <div className="col-12 mt-5 d-flex justify-content-center">
            <Button variant="contained" onClick={()=>setOpened(true)} className="px-5">
              Mehr Fragen? Chatte mit uns!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
