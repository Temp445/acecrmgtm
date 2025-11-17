'use client';

import { useState, useEffect } from 'react';
import FreeTrialPopup from './FreeTrialPopup';
import DemoFormPopup from './DemoFormPopup';
import DemoCard from './CallbackCard';

const Popup = () => {
  const [showTrialPopup, setShowTrialPopup] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showDemoCard, setShowDemoCard] = useState(false);
  const [trialClosed, setTrialClosed] = useState(false);
  const [demoClosed, setDemoClosed] = useState(false);

  useEffect(() => {
    const trialTimer = setTimeout(() => {
      setShowTrialPopup(true);
    }, 10000);
    return () => clearTimeout(trialTimer);
  }, []);

  useEffect(() => {
    if (trialClosed) {
      const demoTimer = setTimeout(() => {
        setShowDemoForm(true);
      }, 20000);
      return () => clearTimeout(demoTimer);
    }
  }, [trialClosed]);

  useEffect(() => {
    if (demoClosed) {
      const cardTimer = setTimeout(() => {
        setShowDemoCard(true);
      }, 20000);
      return () => clearTimeout(cardTimer);
    }
  }, [demoClosed]);

  const handleTrialClose = () => {
    setShowTrialPopup(false);
    setTrialClosed(true);
  };

  const handleDemoClose = () => {
    setShowDemoForm(false);
    setDemoClosed(true);
  };

  const handleDemoCardClose = () => {
    setShowDemoCard(false);
  };

  return (
    <div>
      {showTrialPopup && (
        <FreeTrialPopup
          onClose={handleTrialClose}
        />
      )}

      {showDemoForm && (
        <DemoFormPopup onClose={handleDemoClose} />
      )}

      {showDemoCard && (
        <DemoCard onClose={handleDemoCardClose} />
      )}
    </div>
  );
};

export default Popup;
