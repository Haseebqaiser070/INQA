import React from 'react';
import { Button, Typography, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Iconify from 'src/components/iconify/Iconify';

const plansData = [
  {
    title: 'Basic',
    subheading: 'Inhalt',
    pricing: 'Preis',
    description: 'Die ersten vier Schritte der Siegertreppe. Erklärung mittels PDF.',
    content: [
      '<b>Stufe 1: Zielgespräch (IST-SOLL)</b><br/> Der erste Schritt ist das persönliche Gespräch mit Ihnen. Hier finden wir heraus, welche Veränderung gewünscht und nötig ist.',
      '<b>Stufe 2: Mitarbeiter-Interviews (Analyse)</b>',
    ],
    prices: ['Ab 7 € + MwSt. pro Mitarbeiter und Monat'],
  },
  {
    title: 'Premium',
    subheading: 'Zusätzlicher Inhalt',
    pricing: 'Preis & Preisstaffelung',
    description: 'Die ersten vier Schritte der Siegertreppe aus dem Basic-Programm + Schritt 5.',
    content: [
      '<b>Stufe 5: Ziel-Check mit Online-Befragung</b><br/>Mit dem Input des Across-Teams (Lab-Teams) erstellen wir eine individuelle Online-Befragung / App zum Entwickeln der Unternehmenskultur. Diese Befragung beantworten sämtliche Mitarbeiter. Damit wird klar, inwieweit die Unternehmenskultur bereits „in den Herzen und Köpfen“ der Mitarbeiter ist und wo es gilt, gewisse Zustände zu verändern.',
    ],
    prices: [
      'Ab 9 € + MwSt. pro Mitarbeiter und Monat',
      'Ab 150-199 Mitarbeiter erhalten Sie 20 % Rabatt',
      'Ab 200-249 Mitarbeiter erhalten Sie 30 % Rabatt',
    ],
  },
  {
    title: 'Gold',
    subheading: 'Zusätzlicher Inhalt',
    pricing: 'Preis & Preisstaffelung',
    description:
      'Alle Schritte des Basic- und Premium-Programms + Schritt 6 und Schritt 7 inklusive personalisierbarer App.',
    content: [
      '<b>Stufe 6 : Befragung auswerten – Ergebnisse präsentieren</b><br/>Wir werten die Befragung aus. Die Ergebnisse präsentieren wir dem Across-Team persönlich oder online. Das Across-Team formuliert nun – unterstützt durch unsere Moderation – konkrete Maßnahmen, wie die Unternehmenskultur im Arbeitsalltag jedes Mitarbeiters gelebt wird. Das Across-Team präsentiert die Maßnahmen den Entscheidern. Diese entscheiden jetzt, welche Maßnahmen auch tatsächlich umgesetzt werden.',
      '<b>Stufe 7: Maßnahmen ins Unternehmen bringen</b><br/>Jetzt geht es darum, die beschlossenen Maßnahmen intern optimal zu kommunizieren, und zwar so, dass jeder Mitarbeiter davon erfährt. Denn nur wer davon weiß, wird die Maßnahmen in seinem Arbeitsalltag umsetzen und leben. Das kann z.B. auf der Betriebsversammlung, über das Intranet / App und durch persönliche Gespräche mit dem Across-Team geschehen.',
    ],
    prices: [
      'Ab 12 € + MwSt. pro Mitarbeiter und Monat',
      'Ab 150-199 Mitarbeiter erhalten Sie 20 % Rabatt',
      'Ab 200-249 Mitarbeiter erhalten Sie 30 % Rabatt',
    ],
  },
];

const Plans = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid bg-white">
      <div className="container p-3 section ">
        <Button
          onClick={() => navigate(-1)}
          startIcon={<Iconify icon="ic:baseline-less-than" />}
          className="text-muted me-auto"
        >
          Zurück
        </Button>
        <Typography className="fs-1 my-5 text-center">Preiskategorien</Typography>

        {plansData.map((plan, index) => (
          <div key={index} className="plan">
            <Typography className="fs-2 mt-5">
              {plan.title}{' '}
              {index == 2 ? (
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
              ) : (
                ''
              )}
            </Typography>
            <Typography className="fs-5 my-2">{plan.description}</Typography>
            <Typography className="fs-5 mt-5 mb-3">{plan.subheading}</Typography>

            {plan.content.map((item, i) => (
              <ListItem key={i} alignItems="flex-start" className="my-0 py-0">
                <ListItemAvatar style={{ minWidth: '15px' }}>
                  <Avatar className="me-2 bg-transparent" style={{ width: 'auto' }}>
                    <Iconify icon="mdi:tick" className="text-secondary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText className="fs-5 mt-3" primary={<div dangerouslySetInnerHTML={{ __html: item }} />} />
              </ListItem>
            ))}

            <Typography className="fs-5 my-3">{plan.pricing}</Typography>

            {plan.prices.map((price, i) => (
              <ListItem key={i} alignItems="flex-start" className="my-0 py-0">
                <ListItemAvatar style={{ minWidth: '15px' }}>
                  <Avatar className="me-2 bg-transparent" style={{ width: 'auto' }}>
                    <Iconify icon="mdi:tick" className="text-secondary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText className="fs-5 mt-3" primary={<div dangerouslySetInnerHTML={{ __html: price }} />} />
              </ListItem>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
