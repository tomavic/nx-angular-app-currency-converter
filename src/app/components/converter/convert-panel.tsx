import React from 'react';
import {
  Button,
  Card,
  Col,
  Image,
  Container,
  Form,
  Row,
} from 'react-bootstrap';

function ConvertPanel() {
  const amount = '28';
  const currencyFrom = 'EUR';
  const currencyTo = 'EGP';
  const convertedAmount = '320.56';

  return (
    <section className="sticky-top bg-white py-5" style={{ top: '79px' }}>
      <Container>
        <h2 className="mb-4">Currency Exchanger</h2>
        <Row>
          <Col md="4" className="d-flex align-content-between flex-wrap">
            <div>
              <Form.Label>Enter amount</Form.Label>
              <Form.Control
                placeholder="Enter amount"
                id="amountId"
                className="w-100"
                style={{ maxWidth: '280px' }}
                type="text"
                aria-label="Dollar amount (with dot and two decimal places)"
              />
            </div>
            <Card>
              <Card.Body>
                <Card.Title className="text-dark">Currency rate</Card.Title>
                <Card.Text>
                  {`${amount} ${currencyFrom} = ${convertedAmount} ${currencyTo}`}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md="8" className="d-flex flex-column">
            <div className="d-flex justify-content-between gap-2">
              <div className="w-100">
                <Form.Label>From</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>-</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div className="align-self-end text-center">
                <Button style={{ backgroundColor: 'transparent' }}>
                  {' '}
                  <Image
                    style={{ width: '24px' }}
                    src="https://t3.ftcdn.net/jpg/04/72/69/74/360_F_472697467_hbOP9Y2z9z3ETeEUNxW9jw4ipANoz8BH.jpg"
                    rounded
                  />
                </Button>
              </div>
              <div className="w-100">
                <Form.Label>To</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>-</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>

            <div className="d-flex justify-content-center text-center my-3 ">
              <Button className="w-100" variant="dark">
                Convert
              </Button>
            </div>

            <div className="d-flex justify-content-start gap-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-dark">
                    Converted Amount
                  </Card.Title>
                  <Card.Text>32.02894EGP</Card.Text>
                </Card.Body>
              </Card>
              <div className="align-self-start">
                <Button variant="warning">Details</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ConvertPanel;
