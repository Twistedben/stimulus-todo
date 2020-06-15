import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "add_item", "template" ]

  initialize() {

  }

  add_association(event) {
    event.preventDefault()
    let content = this.templateTarget.innerHTML.replace(/TEMPLATE_RECORD/g, Math.floor(Math.random() * 2000))
    this.add_itemTarget.insertAdjacentHTML('beforebegin', content)
  }

  remove_association(event) {
    event.preventDefault()
    let item = event.target.closest(".nested-fields")
    item.querySelector("input[name*='_destroy']").value = 1
    item.style.display = 'none'
  }
}