export function restore () {
  document.getElementById("editor").innerHTML = localStorage.getItem("content");
}

export function save () {
  localStorage.setItem("content", document.getElementById("editor").innerHTML);
}
