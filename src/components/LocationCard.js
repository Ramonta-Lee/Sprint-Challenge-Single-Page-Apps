import React from "react";
import { Card, Button, CardTitle, CardSubtitle } from "reactstrap";

export default function LocationCard(props) {
  console.log("name", props);
  const { name, type, dimension, residents } = props.location;

  return (
    <Card body inverse color="primary">
      <CardTitle>Name: {name}</CardTitle>
      <CardSubtitle>Type: {type}</CardSubtitle>
      <CardSubtitle>Dimension: {dimension}</CardSubtitle>
      <Button color="secondary">Button</Button>
    </Card>
  );
}
