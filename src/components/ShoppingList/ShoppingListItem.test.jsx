/* eslint-disable max-len */

import { render, fireEvent } from '@testing-library/react';
import ShoppingListItem from './ShoppingListItem';

describe('ShoppingListItem component', () => {
  let updateShoppingItemMock;
  let deleteShoppingItemMock;
  let shoppingItem;

  beforeEach(() => {
    updateShoppingItemMock = jest.fn();
    deleteShoppingItemMock = jest.fn();
    shoppingItem = { id: 1 };
  });

  it('renders an input field with the correct value', () => {
    const { getByDisplayValue } = render(
      <ShoppingListItem
        onUpdateShoppingItem={updateShoppingItemMock}
        onDeleteShoppingItem={deleteShoppingItemMock}
        shoppingItem={shoppingItem}
      />
    );
    expect(getByDisplayValue(shoppingItem.name)).toBeTruthy();
  });

  it('calls the onUpdateShoppingItem prop function when the input field is changed', () => {
    const { getByDisplayValue } = render(
      <ShoppingListItem
        onUpdateShoppingItem={updateShoppingItemMock}
        onDeleteShoppingItem={deleteShoppingItemMock}
        shoppingItem={shoppingItem}
      />
    );

    const input = getByDisplayValue(shoppingItem.name);
    fireEvent.change(input, { target: { value: 'new name' } });
    expect(updateShoppingItemMock).toHaveBeenCalledWith(
      shoppingItem.id,
      {
        ...shoppingItem,
        name: 'new name',
      }
    );
  });

  it('calls the onDeleteShoppingItem prop function when the delete button is clicked',
    () => {
      const { getByText } = render(
        <ShoppingListItem
          onUpdateShoppingItem={updateShoppingItemMock}
          onDeleteShoppingItem={deleteShoppingItemMock}
          shoppingItem={shoppingItem}
        />
      );

      const button = getByText('Delete');
      fireEvent.click(button);
      expect(deleteShoppingItemMock).toHaveBeenCalledWith(
        shoppingItem.id
      );
    });
});
