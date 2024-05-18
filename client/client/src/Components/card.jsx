import React from 'react';
import { Card, Col, Row } from 'antd';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const containerStyle = {
  width: '80%', // Adjust the width as needed
  margin: '0 auto', // Center the container
};

const cardStyle = {
  height: '100%', // Make the card take up the full height of its parent
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const titleStyle = {
  position: 'relative',
  paddingBottom: '18px',
  marginBottom: '6px',
  borderBottom: '6px solid red',
  display: 'flex',
  alignItems: 'center',
};

const contentStyle = {
  flexGrow: 1, // Ensures the content div takes up the remaining space
};

const App = () => (
  <div style={containerStyle}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title={<div style={titleStyle}>Learn about us <LocalLibraryIcon style={{ marginLeft: '8px' }} /> </div>} bordered={false} style={cardStyle}>
          <div style={contentStyle}>We work around the world helping people affected by conflict and armed violence, and promoting the rules of war.</div>
        </Card>
      </Col>
      <Col span={8}>
        <Card title={<div style={titleStyle}>Work with us <HandshakeIcon style={{ marginLeft: '8px' }} /></div>} bordered={false} style={cardStyle}>
          <div style={contentStyle}>We work around the world helping people affected by conflict and armed violence, and promoting the rules of war.</div>
        </Card>
      </Col>
      <Col span={8}>
        <Card title={<div style={titleStyle}>Support us <VolunteerActivismIcon style={{ marginLeft: '8px' }} /> </div>} bordered={false} style={cardStyle}>
          <div style={contentStyle}>We work around the world helping people affected by conflict and armed violence, and promoting the rules of war.</div>
        </Card>
      </Col>
    </Row>
  </div>
);

export default App;
