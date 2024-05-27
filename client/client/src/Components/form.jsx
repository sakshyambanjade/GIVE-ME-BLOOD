import React, { useState } from 'react';
import { Form, Col, Row, Button, FormGroup } from 'react-bootstrap';

function FormGroupExample() {
  const [formData, setFormData] = useState({
    name: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    contactNumber: '',
    email: '',
    medication: '',
    allergies: '',
    pregnant: '',
    conditions: [],
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedConditions = checked
      ? [...formData.conditions, name]
      : formData.conditions.filter((condition) => condition !== name);
    setFormData({
      ...formData,
      conditions: updatedConditions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the backend
    console.log(formData);
  };

  return (
    <>
    <h2 className="text-center mb-4">Microneedling Consultation and Consent Form</h2>
    <div className="container my-5" style={{ maxWidth: '600px', backgroundColor: '#1F1E1D', padding: '30px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', color: 'white' }}>
      <Form onSubmit={handleSubmit}>
        {/* Client Details Section */}
        <h4 className="mb-3">Donor Details</h4>
        <FormGroup className="mb-3" controlId="formGroupName">
          <Form.Label style={{ color: 'white' }}>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleFormChange} style={{ color: 'black', backgroundColor: 'white' }} />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formGroupDOB">
          <Form.Label style={{ color: 'white' }}>Date of Birth</Form.Label>
          <Row>
            <Col>
              <Form.Control as="select" name="dobDay" value={formData.dobDay} onChange={handleFormChange} style={{ color: 'black', backgroundColor: 'white' }}>
                <option>Day...</option>
                {[...Array(31).keys()].map((day) => (
                  <option key={day + 1}>{day + 1}</option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <Form.Control as="select" name="dobMonth" value={formData.dobMonth} onChange={handleFormChange} style={{ color: 'black', backgroundColor: 'white' }}>
                <option>Month...</option>
                {[
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ].map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <Form.Control as="select" name="dobYear" value={formData.dobYear} onChange={handleFormChange} style={{ color: 'black', backgroundColor: 'white' }}>
                <option>Year...</option>
                {[...Array(100).keys()].map((year) => (
                  <option key={year + 1924}>{year + 1924}</option>
                ))}
              </Form.Control>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formGroupContact">
          <Form.Label style={{ color: 'white' }}>Contact Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter contact number" name="contactNumber" value={formData.contactNumber} onChange={handleFormChange} style={{ color: 'black', backgroundColor: 'white' }} />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formGroupEmail">
          <Form.Label  style={{ color: 'white' }} >Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleFormChange} style={{ color: 'black', backgroundColor: 'white' }} />
        </FormGroup>
        <h4 className="mb-3">Blood Group</h4>
        <Col>
              <Form.Control as="select" name="bloodgroup" 
              value={formData.bloodgroup} onChange={handleFormChange}
               style={{ color: 'black', backgroundColor: 'white' }}>
                <option>Your Blood Group...</option>
                {[
                  'A+',
                  'A-',
                  'B+',
                  'B-',
                  'AB+',
                  'AB-',
                  'O+',
                  'O-'
                ].map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <br></br>
        {/* Medical History Section */}
        <h4 className="mb-3">Medical History</h4>

        <FormGroup className="mb-3" controlId="formGroupMedication">
          <Form.Label  style={{ color: 'white' }}>Are you currently taking any medication?</Form.Label>
          <Form.Control as="select" name="medication" value={formData.medication} onChange={handleFormChange} style={{ color: 'black', backgroundColor: 'white' }}>
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formGroupAllergies">
          <Form.Label  style={{ color: 'white' }}>Do you have any allergies or intolerances?</Form.Label>
          <Form.Control as="select" name="allergies" value={formData.allergies} onChange={handleFormChange} style={{ color: 'black', backgroundColor: 'white' }}>
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formGroupPregnant">
          <Form.Label  style={{ color: 'white' }}>Are you currently, or possibly may be, pregnant?</Form.Label>
          <Form.Control as="select" name="pregnant" value={formData.pregnant} onChange={handleFormChange} style={{ color: 'black', backgroundColor: 'white' }}>
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formGroupConditions">
          <Form.Label  style={{ color: 'white' }}>Do any of the following apply to you? Please tick all that apply.</Form.Label>
          <Row>
            <Col>
              {[
                'Keloid or raised scarring',
                'Eczema',
                'Psoriasis',
                'History of herpes simplex infections',
                'Diabetes',
                'Raised moles/warts/lesions in area to be treated',
                'Scleroderma',
                // Add other conditions here
              ].map((condition, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={condition}
                  name={condition.toLowerCase().replace(/\s/g, '_')}
                  onChange={handleCheckboxChange}
                />
              ))}
            </Col>
          </Row>
        </FormGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
}

export default FormGroup
