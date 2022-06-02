import React from 'react';

// import { Container } from './styles';

const myData: string = 'MY_API_DATA';

const Page1: React.FC = () => {
  return <div>
      <h1>Page One - Getting API Data</h1>

      <p>Here we can put some API data {myData}</p>
      <p></p>
<p></p>
      </div>;
}

export default Page1;