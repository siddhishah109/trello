import React, { useState } from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import PanToolIcon from '@mui/icons-material/PanTool';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const Card = ({ card, onDrop, onDelete }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { cardId: card.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });


  return (
    <>
      <DragPreviewImage connect={drag} src={PanToolIcon} />
      <div ref={drag} className={`card ${isDragging ? 'dragging' : ''}`}>
        <span>{card.text}</span>
        <div></div>
        <button onClick={onDelete}>Delete</button>
        <div>
          <TextsmsOutlinedIcon />
          <AttachFileOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </>
  );
};

export default Card;
