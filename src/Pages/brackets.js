import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from '../components/Header';
import Column from '../components/Column';
import { Modal, Button, Form } from 'react-bootstrap';
import MobileHeader from '../components/MobileHeader';

const Brackets = () => {
  const [columns, setColumns] = useState([
    { id: 1, title: 'Design', cards: [{ id: 101, title: 'Old fashioned recipe for preventing allergies and chemical sensitivities' },{ id: 102, title: 'Home business advertising ideas', subtitle: 'Successful businesses know the importance of building and maintaining good working.' },{ id: 103, title: 'Cosmetic surgery abroad making the right choice',image:'/images/Photo1.png', }] },
    { id: 3, title: 'Trello', cards: [{ id: 201, title: 'Home business advertising ideas', subtitle: 'Successful businesses know the importance of building and maintaining good working.' },{ id: 202, title: 'Unmatched toner cartridge quality 20 less than oem price',subtitle:'Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.',image:'/images/Rectangle1.png', },{ id: 203, title: 'Cosmetic surgery abroad making the right choice',image:'/images/Rectangle2.png', }]  },
    { id: 4, title: 'Test', cards: [{ id: 301, title: 'Types of paper in catalog printing',subtitle:'Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).',image:'/images/Photo2.png', },{ id: 302, title: 'There is no competition' ,subtitle:'This article is floated online with an aim to help you find the best dvd printing solution.'}] },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newColumnName, setNewColumnName] = useState('');

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const addCard = (columnId, cardContent) => {
    const { title, subtitle, image } = cardContent;

    const updatedColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          cards: [
            ...column.cards,
            {
              id: Date.now(),
              title,
              subtitle,
              image,
            },
          ],
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
  const deleteColumn = (columnId) => {
    const updatedColumns = columns.filter((column) => column.id !== columnId);
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
  const editCard = (columnId, cardId, updatedData) => {
    const updatedColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          cards: column.cards.map((card) =>
            card.id === cardId ? { ...card, ...updatedData, isEditing: false } : card
          ),
        };
      }
      return column;
    });

    setColumns(updatedColumns);
    console.log(updatedColumns)
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
      <MobileHeader/>
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
                  editCard={editCard}
                  deleteColumn={deleteColumn}
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
