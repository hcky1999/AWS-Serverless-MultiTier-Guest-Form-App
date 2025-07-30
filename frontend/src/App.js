import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    try {
      await fetch("https://skqdvg24td.execute-api.us-east-1.amazonaws.com/prod/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Submission failed. Please try again.");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">Guest Registration</h2>
      {submitted && <Alert variant="success">Thank you for registering!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" value={form.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control name="message" as="textarea" value={form.message} onChange={handleChange} />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
