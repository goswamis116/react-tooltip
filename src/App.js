import React from 'react';
import './App.css';
import CustomTooltip from './CustomTooltip';

const App = () => {
  return (
    <div style={{ marginTop: '50px', textAlign: 'center' }}>
      <h1>React Bootstrap Tooltip Example</h1>
      <CustomTooltip text="Hey this is a tooltip made by me Santanu">
        <button className="btn btn-primary" style={{ marginRight: '10px',marginTop:'100px' }}>
          Hover over me
        </button>
      </CustomTooltip>
      <CustomTooltip text="Another tooltip">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}></span>
      </CustomTooltip>
    </div>
  );
};

export default App;
