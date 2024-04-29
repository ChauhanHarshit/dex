import { useState } from 'react';
import { icp_dex_backend } from 'declarations/icp_dex_backend';
import AppRoutes from './AppRoutes';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Alert from './components/alertHook/Alert'
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
  const { show, type, text } = useSelector((state) => state.alert)


  return (
    <div>
      <div className='sticky top-10 z-50'>
        {show && <Alert type={type} text={text} />}
      </div>
      <Router>  {/* Wrap with Router */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {AppRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.page
                }
              />
            ))}
          </Routes>
        </Suspense>
      </Router>  {/* Close Router */}
    </div>
  );
}

export default App;
