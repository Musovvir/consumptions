export function addCategory(categoryItem) {
  return { type: "add/category", payload: categoryItem };
}

export function addConsumption(historyItem) {
  return { type: "add/consumption", payload: historyItem };
}

export function getSum(sum) {
  return { type: "get/sum", payload: sum };
}

export function getComment(comment) {
  return { type: "get/comment", payload: comment };
}

export function toggleWindow() {
  return { type: "toggle/window" };
}

export function clearInput() {
  return {type: "clear/input"}
}
