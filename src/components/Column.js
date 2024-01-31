// Column.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Column = ({ column, addCard, moveCard, deleteCard }) => {
  const [newCardText, setNewCardText] = useState('');

  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => handleCardDrop(item.cardId),
  });

  const handleAddCard = () => {
    if (newCardText.trim() !== '') {
      addCard(column.id, newCardText);
      setNewCardText('');
    }
  };


  const handleCardDrop = (cardId) => {
    moveCard(column.id, column.id, cardId);
  };

  return (
    <div ref={drop} className="column" style={{ height: '100%' }}>
      <div className='mainTitle'>{column.title} <MoreHorizIcon/> </div>
     
      <div className="cards">
        {column.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onDrop={() => handleCardDrop(card.id)}
            onDelete={() => deleteCard(column.id, card.id)}
          />
        ))}
      </div>
      <div className="add-card">
        <input
          type="text"
          placeholder="Enter card text..."
          value={newCardText}
          onChange={(e) => setNewCardText(e.target.value)}
        />
        <button onClick={handleAddCard}>Add Card</button>
      </div>
    </div>
  );
};

export default Column;
