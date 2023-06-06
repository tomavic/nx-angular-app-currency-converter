import React, { useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Image,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { getSymbols } from 'src/app/api/currency.api';
import { useCurrencyContext } from 'src/app/context/currency.context';

function ConvertPanel() {
  const amount = 28;
  const convertedAmount = 656565;

  const { state, dispatch } = useCurrencyContext();

  const onSelectCurrencyFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch({
      type: 'SET_CURRENCY_FROM',
      payload: value,
    });
  };

  const onSelectCurrencyTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch({
      type: 'SET_CURRENCY_TO',
      payload: value,
    });
  };

  const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({
      type: 'SET_AMOUNT',
      payload: value,
    });
  };

  useEffect(() => {
    getSymbols()
      .then((res) => {
        dispatch({
          type: 'SET_CURRENCY_LIST_FROM',
          payload: res,
        });

        dispatch({
          type: 'SET_CURRENCY_LIST_TO',
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
                onChange={onAmountChange}
                style={{ maxWidth: '280px' }}
                type="text"
                aria-label="Dollar amount (with dot and two decimal places)"
              />
            </div>
            <Card>
              <Card.Body>
                <Card.Title className="text-dark">Currency rate</Card.Title>
                {state.amount && state.currencyFrom && state.currencyTo ? (
                  <Card.Text>
                    {`${state.amount} ${state.currencyFrom} = ${convertedAmount} ${state.currencyTo}`}
                  </Card.Text>
                ) : null}
              </Card.Body>
            </Card>
          </Col>

          <Col md="8" className="d-flex flex-column">
            <div className="d-flex justify-content-between gap-2">
              <div className="w-100">
                <Form.Label>From</Form.Label>
                <Form.Select
                  onChange={onSelectCurrencyFrom}
                  aria-label="Default select example"
                >
                  <option value="">-</option>
                  {state.currencyListFrom.map((item, idx) => (
                    <option value={item.value} key={idx}>
                      {item.name}
                    </option>
                  ))}
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
                <Form.Select
                  onChange={onSelectCurrencyTo}
                  aria-label="Default select example"
                >
                  <option value="">-</option>
                  {state.currencyListTo.map((item, idx) => (
                    <option value={item.value} key={idx}>
                      {item.name}
                    </option>
                  ))}
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
