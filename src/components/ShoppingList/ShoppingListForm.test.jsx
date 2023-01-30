import {
  fireEvent,
  render,
  screen,
  TestingLibraryElementError,
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

  it('renders a submit button', () => {
    render(
      <ShoppingListForm
        id="new"
      />
    );

    const button = screen.queryByTestId('shopping-list-form-submit-button-new');
    expect(button).not.toBe(null);
    expect(() => screen.getByTestId('shopping-list-form-submit-button-new'))
      .not.toThrow(TestingLibraryElementError);
    try {
      screen.getByTestId('shopping-list-form-submit-button-new');
    } catch (error) {
      // eslint-disable-next-line no-undef
      assert.fail();
    }
  });

  it('text field is working', () => {
    render(
      <ShoppingListForm
        id="new"
        mode="create"
      />
    );

    const textarea = screen.getByTestId('shopping-list-form-name-new');
    fireEvent.change(textarea, { target: { value: 'cats are alright' } });
    expect(textarea.value).toBe('cats are alright');  
  });
});
