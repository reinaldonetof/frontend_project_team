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
    openProjectsModal: PropTypes.func.isRequired,
    closeProjectsModal: PropTypes.func.isRequired,
    createProjectsRequest: PropTypes.func.isRequired,
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }),
    projects: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        })
      ),
      projectModalOpen: PropTypes.bool,
    }).isRequired,
  };

  state = {
    newProject: "",
  };

  componentDidMount() {
    const { activeTeam, getProjectsRequest } = this.props;

    if (activeTeam) {
      getProjectsRequest();
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateProject = (e) => {
    e.preventDefault();

    const { createProjectRequest } = this.props;
    const { newProject } = this.state;

    createProjectRequest(newProject);
  };

  render() {
    const {
      activeTeam,
      projects,
      openProjectModal,
      closeProjectModal,
    } = this.props;

    const { newProject } = this.state;
    if (!activeTeam) return null;
    return (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Button onClick={openProjectModal}> + Novo </Button>
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

            <form onSubmit={this.handleCreateProject}>
              <span>NOME</span>
              <input
                name="newProject"
                value={newProject}
                onChange={this.handleInputChange}
              />

              <Button size="big" type="submit">
                Salvar
              </Button>

              <Button onClick={closeProjectModal} size="small" color="gray">
                Cancelar
              </Button>
            </form>
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
