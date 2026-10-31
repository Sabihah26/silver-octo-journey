// Simple fallback ID generator
export default function verbId(root, form) {
  return `${root}-${form}`.replace(/[^a-zA-Z0-9]/g, "");
}
