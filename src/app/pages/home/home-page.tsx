import { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { getLatestNine } from 'src/app/api/currency.api';
import { useCurrencyContext } from 'src/app/context/currency.context';

export default function HomePage() {
  const { state, dispatch } = useCurrencyContext();

  useEffect(() => {
    getLatestNine(state.currencyFrom)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <Row xs={1} md={3} className="g-4 py-4">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
