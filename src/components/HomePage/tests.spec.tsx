import { render, screen } from '@testing-library/react';

import { HomePage } from '.';

describe('HomePage', () => {
  it('should be able render homepage correctly', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', { name: /agenda/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Nunca perca uma reunião. Nunca se atrase/i),
    ).toBeInTheDocument();

    expect(screen.getAllByRole('button')).toHaveLength(2);

    expect(
      screen.getByRole('img', { name: /Image schedule/i }),
    ).toBeInTheDocument();
  });
});
