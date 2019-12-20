import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardImg,
  CardSubtitle
} from "reactstrap";

export default function CharacterCard(props) {
  // return <span>todo: character</span>;
  // console.log("I am props", props.character);
  const { name, status, gender, species, image } = props.character;
  return (
    <div>
      <Card className="mt-4">
        <CardTitle>Name: {name}</CardTitle>
        <CardImg
          top
          width="100%"
          src={image}
          alt="Photo of Rick and Morty characters"
        />
        <CardBody>
          <CardSubtitle>Status: {status}</CardSubtitle>
          <CardSubtitle>Species: {species}</CardSubtitle>
          <CardSubtitle>Gender: {gender}</CardSubtitle>
          <Button color="success">More</Button>{" "}
        </CardBody>
      </Card>
    </div>
  );
}
