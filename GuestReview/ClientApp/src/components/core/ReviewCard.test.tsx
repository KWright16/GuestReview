import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import { ReviewCard } from "./reviewCard";

test('renders without crashing', async () => {
  render(
    <ReviewCard
        title="Test"
        rating={5}
        summary="summary"
    />)

  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByText('"summary"')).toBeInTheDocument();
  expect(screen.getAllByRole('radio')).length === 5;
})