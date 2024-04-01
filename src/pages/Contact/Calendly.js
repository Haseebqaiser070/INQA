import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div className="Calendly mt-4">
      <InlineWidget url="https://calendly.com/syed-mushahid" />
    </div>
  );
};

export default Calendly;
