function increment(delta) {
    const action = { type: "INCREMENT", payload: delta };
    return action;
}
export default increment;
