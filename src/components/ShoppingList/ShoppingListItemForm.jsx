import { useState } from 'react';
import ShoppingListItem from './ShoppingListItem';

const ShoppingListItemForm = ({ onSubmit }) => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [newItem, setNewItem] = useState({
    item_name: '',
    quantity: 1,
  });
  const [editingId, setEditingId] = useState(null);

  const handleUpdateShoppingItem = (updatedShoppingItem) => {
    setShoppingItems((prevShoppingItems) =>
      prevShoppingItems.map((shoppingItem) =>
        shoppingItem.id === updatedShoppingItem.id
          ? updatedShoppingItem
          : shoppingItem
      )
    );
    setEditingId(null);
  };

  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  return (
    <div>
      <form
        data-testid="form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(newItem);
        }}
      >
        <input
          type="text"
          name="item_name"
          data-testid="item-input"
          onChange={handleChange}
          placeholder="Add a new item"
        />
        <input
          type="number"
          name="quantity"
          data-testid="quantity-input"
          onChange={handleChange}
          placeholder="Add a quantity"
        />
        <button type="submit" data-testid="submit-button">
          Add
        </button>
      </form>
      <div>
        {shoppingItems.map((shoppingItem) => (
          <ShoppingListItem
            key={shoppingItem.id}
            shoppingItem={shoppingItem}
            onUpdateShoppingItem={handleUpdateShoppingItem}
            onEdit={() => handleEdit(shoppingItem.id)}
            editing={editingId === shoppingItem.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingListItemForm;