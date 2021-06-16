/* eslint-disable @typescript-eslint/no-var-requires */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { act } from 'react-dom/test-utils';

import { Appointment } from '.';

const useState = jest.spyOn(require('react'), 'useState');

describe('<Appointment />', () => {
  it('should be able create a appointment', async () => {
    render(<Appointment />);

    const dateAppointment = screen.getByRole('button', {
      name: 'June 18, 2021',
    });

    const title = screen.getByTestId(/title/i);
    const hour = screen.getByTestId(/hour/i);
    const description = screen.getByTestId(/description/i);
    const buttonAgendar = screen.getByRole('button', { name: /agendar/i });

    userEvent.click(dateAppointment);
    userEvent.type(title, 'Reunião com a Diretoria');
    userEvent.type(hour, '1330');
    userEvent.type(description, 'Apresentar a conclusão do projeto.');

    act(() => {
      userEvent.click(buttonAgendar);
    });

    await waitFor(() => {
      expect(useState).toBeCalled();
    });
  });
});
