import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProjectsActions from "~/store/ducks/projects";

import { Container, Project } from "./styles";
import Modal from "~/components/Modal";
import Button from "~/styles/components/Button";

class Projects extends Component {
  static propTypes = {
    getProjectsRequest: PropTypes.func.isRequired,
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }),
  };

  componentDidMount() {
    const { activeTeam, getProjectsRequest } = this.props;

    if (activeTeam) {
      getProjectsRequest();
    }
  }

  render() {
    const { activeTeam, projects } = this.props;
    if (!activeTeam) return null;
    return (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Button onClick={() => {}}> + Novo </Button>
            <Button onClick={() => {}}>Membros</Button>
          </div>
        </header>

        {projects.data.map((project) => (
          <Project key={project.id}>
            <p>{project.title}</p>
          </Project>
        ))}

        {projects.projectModalOpen && (
          <Modal>
            <h1>Criar projeto</h1>

            <from onSubmit={() => {}}>
              <span>NOME</span>
            </from>
          </Modal>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTeam: state.teams.active,
  projects: state.projects,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ProjectsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
