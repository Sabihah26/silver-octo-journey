import extractRoot from "./extractRoot.js";

export default function detectForm(word) {
  const { form } = extractRoot(word);
  return form;
}
