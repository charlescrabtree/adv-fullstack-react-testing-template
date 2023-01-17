import {
  fireEvent,
  render,
  screen,
//   TestingLibraryElementError,
} from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm';

describe('ShoppingListForm', () => {

  it('renders a form', () => {
    render(
      <ShoppingListForm
        id="test"
      />
    );

    const form = screen.getByTestId('shopping-list-form-test');
    
    expect(form).toBeInTheDocument();
  });
});
