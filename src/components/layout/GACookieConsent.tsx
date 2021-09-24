import { initGA } from '~utils/ga';
import getConfig from '~services/config';
import React, { useEffect } from 'react';
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from 'react-cookie-consent';

export default function () {
  const handleAcceptCookie = () => {
    initGA(getConfig().GOOGLE_ANALYTICS_ID);
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue('GACookie');
    if (isConsent === 'true') {
      handleAcceptCookie();
    }
  }, []);

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="GACookie"
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#4e503b', fontSize: '14px' }}
      expires={150}
      enableDeclineButton
      onDecline={() => {
        handleDeclineCookie();
      }}
      onAccept={() => {
        handleAcceptCookie();
      }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}
