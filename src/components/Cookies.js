import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CookiePopup() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);

  };

  const accept = () => {
    localStorage.setItem('cookiesAcceptedzz', 'true');
    setOpen(false);
  };
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAcceptedzz');

    if (!cookiesAccepted) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      style={{ zIndex: '99999999999' }}
    >
      <DialogTitle className="text-center">We Use Cookies</DialogTitle>
      <DialogContent>
        <DialogContentText>
          We use cookies to enhance your experience. By using our site, you agree to our use of cookies.
        </DialogContentText>
      </DialogContent>
      <div className="d-flex justify-content-end p-4">
        <Button size="small" color="primary" variant="contained" onClick={() => accept()}>
          Accept
        </Button>
      </div>
    </Dialog>
  );
}
