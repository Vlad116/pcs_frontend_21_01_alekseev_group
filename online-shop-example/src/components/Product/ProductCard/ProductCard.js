import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import "../../../App.css";

const ProductCard = book => {
  const { title, author, price, image, addToCart, addedCount } = book;
  return (
    <Card>
      <div className="card-image">
        <Image src={image} />
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <p>
          <Icon name="rub" />
          {price}
        </p>
      </Card.Content>
      <Button onClick={addToCart.bind(this, book)}>
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default ProductCard;
