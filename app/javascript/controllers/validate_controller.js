import { Controller } from "stimulus"
import validate from 'validate.js'

export default class extends Controller {
  static targets = [ "form", "submit", "input" ]

  initialize() {

  }

  submitForm(event) {
    event.preventDefault()

    let errors = validate(this.formTarget, this.constraints())

    if (errors == null) {
      this.formTarget.subnit()
    } else {
      this.showErrors(errors || {})
    }
  }

  showErrors(errors) {
    for (let input of this.inputTargets) {
      console.log(errors[input.name])
    }
  }

  constraints() {
    let constraints = { } 
    for (let input of this.inputTargets) {
      constraints[input.name] = JSON.parse(input.getAttribute('data-validate'))
    }
    return constraints
  }
}