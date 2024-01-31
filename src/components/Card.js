import React , { useState } from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Modal, Button, Form } from 'react-bootstrap';

const Card = ({ card, onDrop, onEdit, onDelete }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'CARD',
    item: { cardId: card.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const [isFavorite, setIsFavorite] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(card.title);
  const [editedSubtitle, setEditedSubtitle] = useState(card.subtitle);
  const [editedImage, setEditedImage] = useState(card.image);
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  const handleEditModalOpen = () => {
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    // Reset edited values if canceling the edit
    setEditedTitle(card.title);
    setEditedSubtitle(card.subtitle);
    setEditedImage(card.image);
  };

  const handleEditSave = () => {
    // Save the edited values and close the modal
    // You should implement your logic for updating the card data
    onEdit(card.id, {
      title: editedTitle,
      subtitle: editedSubtitle,
      image: editedImage,
    });
    setShowEditModal(false);
  };

console.log(card)
const cardStyle = {
  backgroundImage: `url(${card.image || ''})`, 
  backgroundSize: 'cover'
};

  return (
    <>
      <DragPreviewImage connect={preview}  />
      <div ref={drag} className={`card ${isDragging ? 'dragging' : ''}`}>
      {card.image && (
          <div className="image-container " style={cardStyle}>
            {/* <img src={card.image} alt="Card Image" /> */}
          </div>
        )}
        <div className='cardtitle'>
           {card.title}
        </div>
        <div className='cardcontent'>
           {card.subtitle}
        </div>
        
        <div className='d-flex justify-content-between align-items-center'>
          <div><AddCircleRoundedIcon style={{color:'rgba(0, 0, 0, 1)',margin:'5px',cursor:'pointer'}} fontSize='large'/></div>
          <div>
          <DeleteOutlineOutlinedIcon onClick={onDelete} style={{color:'rgba(0, 0, 0, 0.2)',margin:'5px',cursor:'pointer'}}/>
          <TextsmsOutlinedIcon style={{color:'rgba(0, 0, 0, 0.2)',margin:'5px',cursor:'pointer'}} />
          <AttachFileOutlinedIcon style={{color:'rgba(0, 0, 0, 0.2)',margin:'5px',cursor:'pointer'}} onClick={handleEditModalOpen}/>
          <FavoriteBorderOutlinedIcon style={{
              color: isFavorite ? 'red' : 'rgba(0, 0, 0, 0.2)',
              margin: '5px',
              cursor: 'pointer',
            }}
            onClick={handleFavoriteClick}/>
             <Modal show={showEditModal} onHide={handleEditModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formCardTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formCardSubtitle">
                <Form.Label>Subtitle:</Form.Label>
                <Form.Control
                  type="text"
                  value={editedSubtitle}
                  onChange={(e) => setEditedSubtitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formCardImage">
                <Form.Label>Image URL:</Form.Label>
                <Form.Control
                  type="text"
                  value={editedImage}
                  onChange={(e) => setEditedImage(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEditSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
