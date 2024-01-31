import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Modal, Button, Form } from 'react-bootstrap';

const Column = ({ column, addCard, moveCard, deleteCard , editCard}) => {

  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardSubtitle, setNewCardSubtitle] = useState('');
  const [newCardImage, setNewCardImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => handleCardDrop(item.cardId),
  });

  const handleAddCard = () => {
    setShowModal(true);
  };

  const handleSaveCard = () => {
    if (newCardTitle.trim() !== '') {
      addCard(column.id, {
        title: newCardTitle,
        subtitle: newCardSubtitle,
        image: newCardImage,
      });
      console.log(newCardImage)
      setNewCardTitle('');
      setNewCardSubtitle('');
      setNewCardImage(null);
      setShowModal(false);
    }
  };

  const handleCardDrop = (cardId) => {
    moveCard(column.id, column.id, cardId);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCardImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleEditCard = (cardId, updatedData) => {
    // Implement your logic to update the card data
    editCard(column.id, cardId, updatedData);
  };

  return (
    <div ref={drop} className="column" style={{ height: '100%' }}>
      <div className='mainTitle'>
        {column.title} <MoreHorizIcon/>
      </div>

      <div className="cards">
        {column.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onDrop={() => handleCardDrop(card.id)}
            onDelete={() => deleteCard(column.id, card.id)}
            onEdit={(updatedData) => handleEditCard(card.id, updatedData)}
          />
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCardTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card title..."
                value={newCardTitle}
                onChange={(e) => setNewCardTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formCardSubtitle">
              <Form.Label>Content:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card subtitle..."
                value={newCardSubtitle}
                onChange={(e) => setNewCardSubtitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formCardImage">
              <Form.Label>Image:</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} accept="image/*" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveCard}>
            Save Card
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='addcard' onClick={handleAddCard}>
        + Add Card
      </div>
    </div>
  );
};

export default Column;
