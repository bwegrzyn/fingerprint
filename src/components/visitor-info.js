import * as React from 'react'
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-react';

const VisitorInfo = () => {
  const {
    isLoading, error, data
  } = useVisitorData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (data) {
    return (
      <div>
        <h2>Visitor Data</h2>
        <p>{data ? data.visitorId : 'Loading...'}</p>
        <br/>
      </div>

    );
  } else {
    return null;
  }

};

export default VisitorInfo;
