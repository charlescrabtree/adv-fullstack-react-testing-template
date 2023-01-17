import {
  fireEvent,
  render,
  screen,
  TestingLibraryElementError,
} from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm';

describe('ShoppingListForm', () => {

  it('renders a submit button', () => {
    render(
      <ShoppingListForm
        id={`shopping-list-form-${id}`}
      />
    );
  });
});
