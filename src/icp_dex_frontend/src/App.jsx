import { useState } from 'react';
import { icp_dex_backend } from 'declarations/icp_dex_backend';
import LandingPage from './pages/LandingPage';
function App() {
  // const [greeting, setGreeting] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   icp_dex_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
