import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import zh_CN from '../../locales/zh_CN';
import en_US from '../../locales/en_US';

export const Context = React.createContext(null);
const local = localStorage.getItem('local') || navigator.language;
let lang: any;

const changeLocale = (local: string) => {
  switch (local) {
    case 'en':
      lang = en_US;
      break;
    case 'zh-CN':
      lang = zh_CN;
      break;
    default:
      lang = en_US;
      break;
  }
  localStorage.setItem('local', local);
};

changeLocale(local);

const Wrapper = (props: any) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e: any) {
    const newLocale = e.target.id;
    changeLocale(newLocale);
    setLocale(newLocale);
    setMessages(lang);
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
