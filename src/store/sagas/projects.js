import { call, put } from "redux-saga/effects";
import api from "~/services/api";

import ProjectActions from "../ducks/projects";

export function* getProjects() {
  const response = yield call(api.get, "projects");

  yield put(ProjectActions.getProjectsSuccess(response.data));
}
