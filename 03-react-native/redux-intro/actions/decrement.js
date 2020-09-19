function decrement(delta) {
  const action = { type: "DECREMENT", payload: delta };
  return action;
}

export default decrement;