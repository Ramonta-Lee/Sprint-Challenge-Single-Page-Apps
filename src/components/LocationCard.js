import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card body inverse color="primary">
      <CardTitle>{name}</CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button color="secondary">Button</Button>
    </Card>
  );
}
