const modifier = (text) => {
  [text, stop] = AutoCards("context", text, stop);
  return { text }
}

modifier(text)