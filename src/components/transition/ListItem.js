import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function CardItem () {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.researchgate.net/publication/224624453/figure/fig1/AS:393833717223438@1470908683517/Original-colour-bar-static-test-image-used-in-analogue-television-II-METHODOLOGY.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}