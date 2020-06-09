import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    const index = parseInt(this.data.get("index")) // Essentially grabs the value from the data attribute on the controller using the name (slideshow) and then the data value
    this.showSlide(index)
  }

  next() {
    this.showSlide(this.index + 1)  
  }

  previous() {
    this.showSlide(this.index - 1)
  }

  showSlide(index) {
    this.index = index
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", index == i)
    })
  }
}