import { Controller } from "stimulus";
import anime from 'animejs'

export default class extends Controller {
  static targets = [ "source" ]

  connect() {
    if (document.queryCommandSupported("copy")) {
      this.element.classList.add("clipboard--supported")
    }
  }

  copy(event) {
    event.preventDefault()
    this.sourceTarget.select()
    document.execCommand("copy")
    alert(`You've copied ` + this.sourceTarget.value)
  }
}