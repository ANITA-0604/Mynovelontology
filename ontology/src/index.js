import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Neo4jProvider, createDriver } from 'use-neo4j'

const driver = createDriver('neo4j', '45.79.65.17', 7687, 'neo4j', '900604')


ReactDOM.render(
  <React.StrictMode>
    <Neo4jProvider driver={driver}>
      <App />
    </Neo4jProvider>
  </React.StrictMode>,
  document.getElementById('root')
);