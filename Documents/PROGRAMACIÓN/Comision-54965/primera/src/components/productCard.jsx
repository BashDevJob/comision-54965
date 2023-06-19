import React from 'react';
import Card from 'react-bootstrap/Card';

function productCard(producto) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{producto.titulo}</Card.Title>
        <Card.Text>
          {producto.descripcion}
        </Card.Text>
        <link to={'/item/${producto.id}'}>Ir a detalle</link>
      </Card.Body>
    </Card>
  );
}

export default productCard;