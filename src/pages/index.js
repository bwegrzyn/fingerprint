import React, {useEffect, useState} from 'react';
import '../styles/index.css';
import {FpjsProvider} from '@fingerprintjs/fingerprintjs-pro-react';
import VisitorInfo from '../components/visitor-info';

function Index() {
  // const [date, setDate] = useState(null);
  // useEffect(() => {
  //   async function getDate() {
  //     const res = await fetch('/api/date');
  //     const newDate = await res.text();
  //     setDate(newDate);
  //   }
  //
  //   getDate();
  // }, []);

  return (
    <FpjsProvider loadOptions={
      {
        apiKey: 'z1erGd5S00X62WJbceKW'
      }
    }>
      <main>
        <h1>Fingerprint Test</h1>
        <VisitorInfo></VisitorInfo>
      </main>
    </FpjsProvider>
  );
}

export default Index;
