import React, {useEffect, useState} from 'react';
import '../styles/index.css';
import {FpjsProvider} from '@fingerprintjs/fingerprintjs-pro-react';
import VisitorInfo from '../components/visitor-info';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }

    getDate();
  }, []);



  return (
    <FpjsProvider loadOptions={
      {
        apiKey: 'z1erGd5S00X62WJbceKW'
      }
    }>
      <main>
        <h1>Gatsby + API Route</h1>
        <h2>
          Deployed with{' '}
          <a
            href="https://vercel.com/docs"
            target="_blank"
            rel="noreferrer noopener"
          >
            Vercel
          </a>
          !
        </h2>
        <p>
          <a
            href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
            target="_blank"
            rel="noreferrer noopener"
          >
            This project
          </a>{' '}
          is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
          directories, <code>/src</code> for static content and <code>/api</code>{' '}
          which contains a serverless{' '}
          <a href="https://nodejs.org/en/">Node.js</a> function. See{' '}
          <a href="/api/date">
            <code>api/date</code> for the Date API with Node.js
          </a>
          .
        </p>
        <br/>
        <VisitorInfo></VisitorInfo>
        <h2>The date according to Node.js is:</h2>
        <p>{date ? date : 'Loading date...'}</p>
      </main>
    </FpjsProvider>
  );
}

export default Index;
