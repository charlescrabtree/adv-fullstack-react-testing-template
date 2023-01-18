import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList';

describe('ShoppingList', () => {
  it('renders the shopping list name', () => {
    const testList = {
      id: '1',
      name: 'The Shoppingest List',
      shoppingItems: [],
    };
    render(<ShoppingList shoppingList={testList} />);
    expect(screen.queryByTestId('shopping-list-name-1').textContent)
      .toBe('The Shoppingest List');
  });
});
