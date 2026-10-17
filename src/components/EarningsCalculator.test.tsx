import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EarningsCalculator } from './EarningsCalculator';

describe('EarningsCalculator Component', () => {
  it('renders correctly with default values', () => {
    const handleApply = vi.fn();
    render(<EarningsCalculator onApplyClick={handleApply} />);

    expect(screen.getByText('Estimate Your Monthly Revenue')).toBeInTheDocument();
    expect(screen.getByText(/Direct Local Sales/i)).toBeInTheDocument();
    expect(screen.getByText(/SOHAN.com Ad Orders Fulfilled/i)).toBeInTheDocument();
  });

  it('updates earnings calculation when direct units slider changes', () => {
    const handleApply = vi.fn();
    render(<EarningsCalculator onApplyClick={handleApply} />);

    const directSlider = screen.getByLabelText(/1\. Direct Local Sales/i);
    fireEvent.change(directSlider, { target: { value: '50' } });

    expect(screen.getByText('50 units')).toBeInTheDocument();
  });

  it('triggers onApplyClick when CTA button is clicked', () => {
    const handleApply = vi.fn();
    render(<EarningsCalculator onApplyClick={handleApply} />);

    const ctaButton = screen.getByRole('button', { name: /Apply for Your Metro Territory/i });
    fireEvent.click(ctaButton);

    expect(handleApply).toHaveBeenCalledTimes(1);
  });
});
