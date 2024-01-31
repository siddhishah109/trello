import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from '../components/Header';
import MainCard from '../components/MainCard';
import Column from '../components/Column';
import { Modal, Button, Form } from 'react-bootstrap';

const Brackets = () => {
  const [columns, setColumns] = useState([
    { id: 1, title: 'To Do', cards: [] },
    { id: 2, title: 'In Progress', cards: [] },
    { id: 3, title: 'Done', cards: [] },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newColumnName, setNewColumnName] = useState('');

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const addCard = (columnId, text) => {
    const updatedColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          cards: [...column.cards, { id: Date.now(), text }],
        };
      }
      return column;
    });

    setColumns(updatedColumns);
  };

  const moveCard = (sourceColumnId, destinationColumnId, cardId) => {
    const updatedColumns = columns.map((column) => {
      if (column.id === sourceColumnId) {
        return {
          ...column,
          cards: column.cards.filter((card) => card.id !== cardId),
        };
      }
      if (column.id === destinationColumnId) {
        return {
          ...column,
          cards: [...column.cards, { id: cardId, text: `Card ${cardId}` }],
        };
      }
      return column;
    });

    setColumns(updatedColumns);
  };

  const deleteCard = (columnId, cardId) => {
    const updatedColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          cards: column.cards.filter((card) => card.id !== cardId),
        };
      }
      return column;
    });

    setColumns(updatedColumns);
  };

  const addColumn = () => {
    const newColumn = {
      id: Date.now(),
      title: newColumnName || `New Column ${columns.length + 1}`,
      cards: [],
    };

    setColumns([...columns, newColumn]);
    setNewColumnName('');
    handleClose();
  };

  return (
    <div>
      <Header />
      <div className="board-container">
        <DndProvider backend={HTML5Backend}>
          <div className="app">
            <div className="board">
              {columns.map((column) => (
                <Column
                  key={column.id}
                  column={column}
                  addCard={addCard}
                  moveCard={moveCard}
                  deleteCard={deleteCard}
                />
              ))}
              <div className="add-column">
                <Button variant="primary" onClick={handleShow}>
                  Add Column
                </Button>
              </div>
            </div>
          </div>
        </DndProvider>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Column</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formColumnName">
              <Form.Label>Column Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter column name"
                value={newColumnName}
                onChange={(e) => setNewColumnName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addColumn}>
            Save Column
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Brackets;
