import { Col, Row } from 'antd';
import React from 'react';
import './App.less';
import { Button } from './Components';

const App = () => (
  <div className="container">
    <Row justify="center" fluid={true}>
      <Col>
        <Button md={true} type="primary">
          Show Message
        </Button>
      </Col>
    </Row>
  </div>
);

export default App;
