import React from 'react';

const ShoppingListItem = ({
  shoppingItem,
  onUpdateShoppingItem,
  onDeleteShoppingItem,
}) => {
  const [updatedItem, setUpdatedItem] = React.useState({
    ...shoppingItem,
  });

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="item_name"
          value={updatedItem.item_name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          value={updatedItem.quantity}
          onChange={handleChange}
        />
      </form>
      <span>
        {shoppingItem.item_name}: {shoppingItem.quantity}
      </span>
      <br />
      <button
        data-testid={`update-shopping-item-${shoppingItem.id}`}
        onClick={() => onUpdateShoppingItem(updatedItem)}
      >
        Update
      </button>
      <br />
      <button
        data-testid={`delete-shopping-item-${shoppingItem.id}`}
        onClick={() => onDeleteShoppingItem(shoppingItem)}
      >
        Delete
      </button>
    </div>
  );
};

export default ShoppingListItem;
