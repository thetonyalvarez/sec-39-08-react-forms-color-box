import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { expect, it, describe } from 'vitest'
import Box from './Box'

// smoke test
it("renders without crashing", function() {
  render(<Box />)
});

// snapshot
it("matches snapshot", function() {
  const {asFragment} = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});