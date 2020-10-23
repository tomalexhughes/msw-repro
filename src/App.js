import { useState } from 'react';

function App() {
  const [response, setResponse] = useState(null);

  const makeNetworkRequest = async () => {
    const res = await fetch('/example', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: { foo: 'bar' }
    });

    const json = await res.json();

    setResponse(json);
  };

  return (
    <>
      <button onClick={makeNetworkRequest}>Make Network Request</button>
      <br />
      {response && <>Response: {response.toString()}</>}
    </>
  );
}

export default App;
