import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { expect, it, describe } from 'vitest'
import Box from './Box'

afterEach(cleanup)

// smoke test
it("renders without crashing", function() {
  render(<Box />)
});

// snapshot
it("matches snapshot", function() {
  const {asFragment} = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

it("should render a blue box that is 50px x 50px", function() {
  const { getByTestId } = render(<Box id={1} bgColor={"blue"} width={50} height={50} />)

  const box = getByTestId('box')

  expect(box).toHaveStyle('background-color: blue')
  expect(box).toHaveStyle('width: 50px')
  expect(box).toHaveStyle('height: 50px')
})