import React, { Component } from "react";

import { Container, Project } from "./styles";
import Button from "~/styles/components/Button";

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <header>
          <h1>Rocketseat</h1>
          <div>
            <Button onClicke={() => {}}> + Novo </Button>
            <Button onClick={() => {}}>Membros</Button>
          </div>
        </header>

        <Project>
          <p>Aplicação com React Native</p>
        </Project>
        <Project>
          <p>Aplicação com React Native</p>
        </Project>
        <Project>
          <p>Aplicação com React Native</p>
        </Project>
        <Project>
          <p>Aplicação com React Native</p>
        </Project>
      </Container>
    );
  }
}
