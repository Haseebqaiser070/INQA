import React from 'react';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Iconify from 'src/components/iconify';
const benefits = [
  'Es ist Mitarbeiter*innen-orientiert. Das heißt, dass bei einer Unternehmenskultur-Entwicklung ALLE Mitarbeiter in den Prozess involviert sind - wir gestalten also mit Ihnen gemeinsam den Start in eine erfüllte Unternehmenszukunft.',
  '80 % Förderung',
  'Zusätzlich können Sie mit unseren Gesundheitsprogrammen 600 € netto pro Mitarbeiter von der Steuer absetzen.',
  'Das INQA-Coach-Programm sorgt für eine niedrigere Fluktuation und weniger Krankentage.',
];
export default function About() {
  return (
    <>
      <div className="container-fluid section" style={{ backgroundColor: '#EFF4FF' }}>
        <div className="container">
          <Typography className="fs-1 text-center">Um was geht’s?</Typography>
          <Typography className=" mt-5 fs-5 pt-1">
            Wussten Sie, dass die Unternehmenskultur für 46 % der Arbeitssuchenden bei ihrer Entscheidung für ein
            Unternehmen äußerst wichtig ist?{' '}
          </Typography>
          <Typography className=" mt-5 fs-5 ">
            Glückliche und zufriedene Mitarbeiter… Welcher Arbeitgeber möchte das nicht? Im Rahmen des INQA-Coachings,
            begleiten wir Sie gemeinsam mit Ihren Beschäftigten dabei, Betriebsklima, Gesundheit und innerbetrieblicher
            Kommunikation zu verbessern. Dabei geht nicht nur um BeRATung, sondern vielmehr darum die Ideen aus den
            eigenen Reihen zu entwickeln, diese zu fördern und umzusetzen - also den Prozess zu moderieren. Daraus
            entwickelt sich eine gute Führungs- und Unternehmenskultur.
          </Typography>

          <Typography className=" mt-5 fs-5 ">Was ist das Besondere am INQA-Coaching Programm?</Typography>
          <List>
            {benefits.map((benefit, index) => (
              <ListItem key={index} alignItems="flex-start" className='fs-5'>
                <ListItemAvatar style={{ minWidth: '15px' }}>
                  <Avatar className="me-2 bg-transparent" style={{ width: 'auto' }}>
                    <Iconify icon="mdi:tick" className="text-secondary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={benefit} className="mt-3 fs-5" />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </>
  );
}
