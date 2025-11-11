import React from 'react';
import './styles/index.css';
import AccessibleButton from './components/AccessibleButton';
import { axe } from 'axe-core';
import { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    axe.run((err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(results);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to the React Accessibility App</h1>
      <AccessibleButton />
    </div>
  );
};

export default App;