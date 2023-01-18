//Write a test for creating new shopping lists.

import { render, fireEvent } from '@testing-library/react';
import ShoppingLists from './ShoppingLists';

describe('ShoppingLists component', () => {
  it('renders shopping lists', () => {
    const onCreateShoppingList = jest.fn();
    const { getByTestId } = render(
      <ShoppingLists
        onCreateShoppingList={onCreateShoppingList}
        shoppingLists={[]}
      />
    );
    //creates a variable that gets the test id of the shopping lists 
    const input = getByTestId('shopping-list-form-name-new');

    const submitButton = getByTestId('shopping-list-form-submit-button-new');
    
    fireEvent.change(input, { target: { value: 'testShoppingList' } });
    fireEvent.click(submitButton);
    //fires an event that changes the value of the input to 'testShoppingList

    expect(onCreateShoppingList).toHaveBeenCalledWith({
      id: null,
      name: 'testShoppingList',
      shoppingItems: [],
    });

  });
});
