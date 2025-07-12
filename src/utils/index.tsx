function saveToLocalStorage(user: { name: string; username: string }): void {
  localStorage.setItem("USER", JSON.stringify(user));
}
function getFromLocalStorage(): { name: string; username: string } | null {
  const user = localStorage.getItem("USER");
  return user ? JSON.parse(user) : null;
}

function removeFromLocalStorage(): void {
  localStorage.removeItem("USER");
}

export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
