import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    state: "",
    country: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [guestData, setGuestData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    try {
      await fetch("https://r9g6zkslgc.execute-api.us-east-1.amazonaws.com/prod/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      setSubmitted(true);
      setGuestData(form); // show preview with submitted data
      //Auto-hide guest data after 2 minutes
      setTimeout(() => {
        setGuestData(null);
      }, 120000); // 2 minutes  
      // Reset form 
      setForm({
        name: "",
        email: "",
        city: "",
        state: "",
        country: "",
        message: ""
      });
      setIsEditing(false); // back to preview
    } catch (err) {
      setError("Submission failed. Please try again.");
    }
  };

  const handleEdit = () => {
    setForm(guestData);     // Load submitted data back into the form
    setGuestData(null);     // Hide preview
    setSubmitted(false);    // Hide success alert
    setIsEditing(true);     // Switch to editing mode
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Guest Registration</h2>

      {submitted && !isEditing && <Alert variant="success">✅ Thank you for registering!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        {/* Form */}
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={form.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control name="city" value={form.city} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control name="state" value={form.state} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control name="country" value={form.country} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" value={form.message} onChange={handleChange} />
            </Form.Group>
            <Button type="submit" variant="primary">{isEditing ? "Update" : "Submit"}</Button>
          </Form>
        </Col>

        {/* Preview */}
        <Col md={6}>
          {guestData && (
            <Card className="ms-md-4 mt-4 mt-md-0">
              <Card.Body>
                <Card.Title>👋 Guest Preview</Card.Title>
                <p><strong>Name:</strong> {guestData.name}</p>
                <p><strong>Email:</strong> {guestData.email}</p>
                <p><strong>City:</strong> {guestData.city}</p>
                <p><strong>State:</strong> {guestData.state}</p>
                <p><strong>Country:</strong> {guestData.country}</p>
                <p><strong>Message:</strong> {guestData.message || "(none)"}</p>
                <Button variant="outline-secondary" className="mt-3" onClick={handleEdit}>
                  ✏️ Edit Info
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
