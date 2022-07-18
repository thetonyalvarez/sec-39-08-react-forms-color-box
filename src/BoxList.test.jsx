import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { expect, it, describe } from 'vitest'
import BoxList from './BoxList'

// smoke test
it("renders without crashing", function() {
  render(<BoxList />)
});

// snapshot
it("matches snapshot", function() {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});