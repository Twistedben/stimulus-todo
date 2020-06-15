import { Controller } from "stimulus"
import Rails from '@rails/ujs'

export default class extends Controller {

  initialize() {
    setInterval(() => {
      this.request((response) => {
        this.handleResponse(response)
      })
    }, 5000);
  }

  request(callback) {
    Rails.ajax({
      type: 'GET',
      url: this.url(),
      success: callback,
      error: function(response) {}
    })
  }

  handleResponse(data) {
    this.element.innerHTML = new XMLSerializer().serializeToString(data)
  }

  url() {
    return this.element.getAttribute('data-url')
  }
}