import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    this.showCurrentSlide()
    // const index = parseInt(this.data.get("index")) // Essentially grabs the value from the data attribute on the controller using the name (slideshow) and then the data value
    // this.showSlide(index)
  }
  
  next() {
    this.index++
    // this.showSlide(this.index + 1)  
  }

  previous() {
    this.index--
    // this.showSlide(this.index - 1)
  }

  showCurrentSlide() {
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", this.index == i)
      el.classList.toggle('animate__slideInRight', this.index == i)
    })
  }

  get index() {
    const slidesIndexValue = this.slideTargets.length - 1 
    if (this.data.get("index") > slidesIndexValue ) {
      return 0
    }
    else if (this.data.get("index") < 0) {
      return slidesIndexValue
    } 
    else {
      return parseInt(this.data.get("index") || 0)
    }
  }

  set index(value) {
    this.data.set("index", value)
    this.showCurrentSlide()
  }

  // showSlide(index) {
  //   this.index = index
  //   this.data.set("index", this.index)
  //   console.log(this.slideTargets)
  //   this.slideTargets.forEach((el, i) => {
  //     el.classList.toggle("slide--current", index == i)
  //     el.classList.toggle('animate__slideInRight', index == i)
  //   })
  // }
}