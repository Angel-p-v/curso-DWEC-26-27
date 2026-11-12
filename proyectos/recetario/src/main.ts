import { createForm, getElement } from "./components/dom";

const divApp = getElement("#app", HTMLDivElement);

const form = createForm();

divApp.append(form)

