import React from 'react';
// import { Card, Image, Icon, Button } from 'semantic-ui-react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../../App.css";

const ProductCard = ({ title, author, price, image, addToCart, addedCount }) => {
  return (
	<Card sx={{ maxWidth: 345 }}>
		<CardMedia
			component="img"
			height="140"
			image={image}
			alt="Card image"
		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				{title}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{author} {price}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="big" onClick={addToCart}>Добавить в корзину {addedCount > 0 && `(${addedCount})`}</Button>
		</CardActions>
  </Card>
    // <Card>
    //   <div className="card-image">
    //     <Image src={image} />
    //   </div>
    //   <Card.Content>
    //     <Card.Header>{title}</Card.Header>
    //     <Card.Meta>
    //       <span className="date">{author}</span>
    //     </Card.Meta>
    //   </Card.Content>
    //   <Card.Content extra>
    //     <p>
    //       <Icon name="rub" />
    //       {price}
    //     </p>
    //   </Card.Content>
    //   <Button onClick={addToCart}>
    //     Добавить в корзину {addedCount > 0 && `(${addedCount})`}
    //   </Button>
    // </Card>
  );
};

export default ProductCard;
