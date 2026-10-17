import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ApplicationForm } from './ApplicationForm';

describe('ApplicationForm Component', () => {
  it('renders form inputs correctly', () => {
    render(<ApplicationForm initialTier="City Partner" />);

    expect(screen.getByText('Apply for Your Metro Territory')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e\.g\. Elena Rostova/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/elena@yourboutique\.com/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Territory Application/i })).toBeInTheDocument();
  });

  it('updates form values on user input', () => {
    render(<ApplicationForm initialTier="City Partner" />);

    const nameInput = screen.getByPlaceholderText(/e\.g\. Elena Rostova/i) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Sarah Jenkins' } });

    expect(nameInput.value).toBe('Sarah Jenkins');
  });

  it('displays confirmation state upon submission', async () => {
    render(<ApplicationForm initialTier="City Partner" />);

    const nameInput = screen.getByPlaceholderText(/e\.g\. Elena Rostova/i);
    const emailInput = screen.getByPlaceholderText(/elena@yourboutique\.com/i);
    const phoneInput = screen.getByPlaceholderText(/\+1 \(512\) 000-0000/i);
    const cityInput = screen.getByPlaceholderText(/e\.g\. Austin, TX/i);

    fireEvent.change(nameInput, { target: { value: 'Sarah Jenkins' } });
    fireEvent.change(emailInput, { target: { value: 'sarah@test.com' } });
    fireEvent.change(phoneInput, { target: { value: '555-123-4567' } });
    fireEvent.change(cityInput, { target: { value: 'Miami, FL' } });

    const submitBtn = screen.getByRole('button', { name: /Submit Territory Application/i });
    fireEvent.click(submitBtn);

    // After simulated submission timeout
    const confirmation = await screen.findByText(/Application Received/i);
    expect(confirmation).toBeInTheDocument();
  });
});
