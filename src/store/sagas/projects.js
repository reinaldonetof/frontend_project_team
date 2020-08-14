import { call, put } from "redux-saga/effects";
import { action as toastrActions } from "react-redux-toastr";
import api from "~/services/api";

import ProjectActions from "../ducks/projects";

export function* getProjects() {
  const response = yield call(api.get, "projects");

  yield put(ProjectActions.getProjectsSuccess(response.data));
}

export function* createProject({ title }) {
  try {
    const response = yield call(api.post, "projects", { title });
    yield put(ProjectActions.createProjectSuccess(response.data));
    yield put(ProjectActions.closeProjectModal());
  } catch (e) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Erro na operação",
        message: "Houve um erro, tente novamente!",
      })
    );
  }
}
