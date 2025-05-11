import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import "./Pet.css";

function Pets() {
  const [pets, setPets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    image_url: "",
  });
  const [editId, setEditId] = useState(null);

  // 🟢 GET pets from backend
  const fetchPets = async () => {
    const res = await fetch("http://localhost:5000/api/pets");
    const data = await res.json();
    setPets(data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  // 🟢 FORM change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🟢 ADD or UPDATE pet
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editId
      ? `http://localhost:5000/api/pets/${editId}`
      : "http://localhost:5000/api/pets";
    const method = editId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success || data.id) {
      alert(editId ? "Pet updated" : "Pet added");
      setFormData({ name: "", type: "", description: "", image_url: "" });
      setEditId(null);
      setShowModal(false);
      fetchPets();
    }
  };

  // 🟠 Edit button click
  const handleEdit = (pet) => {
    setFormData(pet);
    setEditId(pet.id);
    setShowModal(true);
  };

  // 🔴 Delete pet
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this pet?")) {
      await fetch(`http://localhost:5000/api/pets/${id}`, { method: "DELETE" });
      fetchPets();
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🐾 Our Pets</h2>

      <div className="text-center mb-4">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          ➕ Add New Pet
        </Button>
      </div>

      <Row className="g-4">
        {pets.map((pet) => (
          <Col md={4} key={pet.id}>
            <Card className="product-card">
              <Card.Img variant="top" src={pet.image_url} alt={pet.name} />
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>{pet.description}</Card.Text>
                <Button variant="success" className="w-100 mb-2">
                  Adopt Now
                </Button>
                <Button variant="warning" className="w-100 mb-2" onClick={() => handleEdit(pet)}>
                  ✏️ Edit
                </Button>
                <Button variant="danger" className="w-100" onClick={() => handleDelete(pet.id)}>
                  🗑️ Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={() => { setShowModal(false); setEditId(null); }}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Edit Pet" : "Add New Pet"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Control name="type" value={formData.type} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" value={formData.description} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control name="image_url" value={formData.image_url} onChange={handleChange} required />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="success">
                {editId ? "Update" : "Add"} Pet
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Pets;
