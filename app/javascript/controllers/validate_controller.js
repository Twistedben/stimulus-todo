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
      this.formTarget.submit()
    } else {
      this.showErrors(errors || {})
    }
  }

  showErrors(errors) {
    for (let input of this.inputTargets) {
      // console.log(errors[input.name])
      this.showErrorsOnInput(input, errors[input.name])
    }
  }

  constraints() {
    let constraints = { } 
    for (let input of this.inputTargets) {
      constraints[input.name] = JSON.parse(input.getAttribute('data-validate'))
    }
    return constraints
  }

  showErrorsOnInput(input, errors) {
    this.clearErrors(input)
    if (errors) {
      input.parentElement.classList.add('has-error')
      this.insertErrorMessages(input, errors)
    } else {
      input.parentElement.classList.remove('has-error')
      input.parentElement.classList.add('has-success')
    }
  }

  clearErrors(input) {
    let inputId = document.getElementById(`error_${input.name}`) 
    if (inputId != null) {
      inputId.remove()
    }
  }

  insertErrorMessages(input, errors) {
    let html = document.createElement("div")
    html.innerHTML = errors.join(' ')
    html.id = `error_${input.name}`
    input.after(html)

  }
}