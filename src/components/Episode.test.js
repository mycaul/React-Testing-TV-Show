import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';

import Episodes from './Episodes';

test('Renders episodes', () => {
  const showData = {
    id: 553946,
    name: 'Chapter One: The Vanishing of Will Byers',
    season: 1,
    number: 1,
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
    },
    summary:
      "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
  };

  const { queryAllByText, rerender } = render(
    <Episodes episodes={[]} />,
  );
  expect(queryAllByText(/season/i) === null);
  rerender(<Episodes episodes={[showData]} />);
  expect(queryAllByText(/season/i)).toHaveLength(1);
});