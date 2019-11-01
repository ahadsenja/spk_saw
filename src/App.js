import React from 'react';
import { Row, Col } from 'react-bootstrap'
import Assessment from './app/Assessment/Assessment'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App" style={{ overflow: 'hidden' }}>
      <NavigationBar />
      <Row>
        <Col sm='2'> <Sidebar /> </Col>
        <Col sm='10'>
          <div className='container-fluid'>
            <main style={{ display: 'overview', paddingTop: '20px' }}>
              <Assessment />
            </main>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
