import React from 'react';
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Dashboard from './components/Dashboard.js';
import Display from './components/Display.js';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', () => {
  const page = rtl.render(<App/>)
  expect(page).toBeVisible
});

test('renders display component', () => {
  const { getByText } = rtl.render(<Display />);
  const displayElement = getByText(/balls/i);
  expect(displayElement).toBeInTheDocument();
});

test('renders dashboard component', () => {
  const { getByText } = rtl.render(<Dashboard />);
  const dashboardElement = getByText(/foul/i);
  expect(dashboardElement).toBeInTheDocument();
})