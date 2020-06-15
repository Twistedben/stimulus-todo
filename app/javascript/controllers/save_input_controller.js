import { Controller } from "stimulus"
import Rails from '@rails/ujs'

export default class extends Controller {
  static targets = [ "input_field" ]

  save_changes(event) {
    let data = new FormData() 
    data.append(this.input_fieldTarget.name, this.value())
  
    Rails.ajax({
      type: 'PATCH',
      url: this.url(),
      dataType: 'json',
      data: data,
      success: (response) => {console.log('Setting saved')},
      error: (err) => {console.log('Setting not saved, error', err)}
    })
  }
  value() {
    // Check each form input type and return as needed
    switch (this.input_fieldTarget.type) {
      case "checkbox":
        return this.input_fieldTarget.checked == true ? 1 : 0
    }
  }

  url() {
    return this.input_fieldTarget.closest('form').getAttribute('action')
  }
}