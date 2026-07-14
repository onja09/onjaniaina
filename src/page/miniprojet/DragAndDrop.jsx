import React, { useState } from 'react'

function DragAndDrop() {
const [dragged, setDragged] = useState(null);

  const handleDragStart = (e, item) => setDragged(item);
  const handleDrop = (e) => e.target.appendChild(document.getElementById(dragged));

  return (
    <div className="drag-container">
      <div
        id="fill"
        className="fill"
        draggable
        onDragStart={(e) => handleDragStart(e, 'fill')}
      />
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="empty"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
}

export default DragAndDrop