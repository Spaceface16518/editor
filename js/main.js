import { restore, save } from "./storage";
import { debounce } from "./debounce";

window.onload = () => {
  // restore on page load
  restore();

  // focus the editor as soon as we restore from storage
  document.getElementById("editor").focus();
};

// save on changes (debounced by 5 secs)
document.getElementById("editor").oninput = debounce(save, 0);

