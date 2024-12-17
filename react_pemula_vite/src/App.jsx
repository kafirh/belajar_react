import { useState } from 'react';

// Header Component
function Header() {
  return <h1>Simple Counter 🧮</h1>;
}

// Button Component
function Button({ label, onClick, disabled }) {
  const buttonStyle = { margin: '5px', padding: '10px' };
  return (
    <button style={buttonStyle} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

// Main App Component
function App() {
  const [value, setValue] = useState(0); // Counter value
  const [isDone, setIsDone] = useState(false); // Track if counter is "Done!"

  // Increment value
  function handleIncrement() {
    if (value < 10) {
      setValue(value + 1);
    } else {
      setValue('Done!');
      setIsDone(true);
    }
  }

  // Decrement value
  function handleDecrement() {
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue('Done!');
      setIsDone(true);
    }
  }

  // Reset value
  function handleReset() {
    setValue(0);
    setIsDone(false);
  }

  // Render App UI
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <div>
        <Button label="-" onClick={handleDecrement} disabled={isDone} />
        <span style={{ margin: '0 10px', fontSize: '1.5rem' }}>{value}</span>
        <Button label="+" onClick={handleIncrement} disabled={isDone} />
      </div>
      <Button label="Reset" onClick={handleReset} disabled={!isDone} />
    </div>
  );
}

export default App;
