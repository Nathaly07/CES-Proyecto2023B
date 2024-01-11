
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../../src/components/Calculator';
import { Formik } from 'formik';
import { describe } from 'jest';
import { test } from 'jest';

import { expect } from '@testing-library/jest-dom';

describe("Calculator", () => {


    test('should display errors for invalid form values', async () => {
        // Render the component with invalid initial values
        render(<Calculator values={{ stockName: '', purchasePricePerShare: 'abc' }} />);
      
        // Trigger a submit event on the form
        fireEvent.submit(screen.getByRole('form'));
      
        // Find error elements for each invalid field
        const stockNameError = await screen.findByText(/Campo vacío/i);
        const purchasePricePerShareError = await screen.findByText(/Error: Ingreso no válido. Por favor ingrese un número mayor o igual a cero/i);
      
        expect(stockNameError).toBeInTheDocument();
        expect(purchasePricePerShareError).toBeInTheDocument();
    });
});