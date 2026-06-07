import React, { useState } from 'react';
import Button from './Button';
import DigitalClock from './DigitalClock';
import './App.css';

type AppView = 'buttons' | 'clock';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('clock');

  return (
    <div className="app">
      {currentView === 'clock' ? (
        <div>
          <DigitalClock />
          <div className="view-toggle">
            <Button
              label="View Button Component"
              variant="secondary"
              onClick={() => setCurrentView('buttons')}
            />
          </div>
        </div>
      ) : (
        <div className="button-showcase">
          <h1>React Components Demo</h1>

          <section className="section">
            <h2>Button Variants</h2>
            <div className="button-group">
              <Button label="Primary" variant="primary" />
              <Button label="Secondary" variant="secondary" />
              <Button label="Danger" variant="danger" />
            </div>
          </section>

          <section className="section">
            <h2>Button Sizes</h2>
            <div className="button-group">
              <Button label="Small" size="small" />
              <Button label="Medium" size="medium" />
              <Button label="Large" size="large" />
            </div>
          </section>

          <section className="section">
            <h2>Disabled State</h2>
            <div className="button-group">
              <Button label="Disabled Primary" variant="primary" disabled />
              <Button label="Disabled Secondary" variant="secondary" disabled />
              <Button label="Disabled Danger" variant="danger" disabled />
            </div>
          </section>

          <div className="view-toggle">
            <Button
              label="Back to Clock"
              variant="primary"
              onClick={() => setCurrentView('clock')}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
