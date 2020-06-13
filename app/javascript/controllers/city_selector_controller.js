import { Controller } from "stimulus";
import Rails from "@rails/ujs"

export default class extends Controller {
  initialize() {
    console.log('hello from city-selector controller')
    this.check_forms()    
  }

  check_forms() {
    if (this.city.getAttribute('data-county-id')){
      this.state.value = this.city.getAttribute('data-state-id')
      this.state_changed()
    } 
  }

  state_changed() {
    var that = this
    this.request_data(this.state_url, function (response) {
      that.county.innerText = null;
      that.city.innerText = null;
      that.county.appendChild(document.createElement('option'))
      for (let i = 0; i < response.length; i++) {
        var opt = document.createElement('option')
        opt.textContent = response[i][0]
        opt.value = response[i][1]
        opt.setAttribute('url', response[i][2]['url'])
        that.county.appendChild(opt)
      }

      if (that.city.getAttribute('data-county-id')) {
        that.county.value = that.city.getAttribute('data-county-id')
        that.city.removeAttribute('data-county-id')
        that.city.innerText = null;
        that.county_changed()
      }
    })
  }

  county_changed() {
    var that = this
    this.request_data(this.county_url, function (response) {
      that.city.innerText = null;
      that.city.appendChild(document.createElement('option'))
      for (let i = 0; i < response.length; i++) {
        var opt = document.createElement('option')
        opt.textContent = response[i][0]
        opt.value = response[i][1]
        that.city.appendChild(opt)
      }

      if (that.city.getAttribute('data-city-id')) {
        that.city.value = that.city.getAttribute('data-city-id')
        that.city.removeAttribute('data-city-id')
      }
    })
  }

  get state() {
    return this.targets.find('state_input')
  }

  get county() {
    return this.targets.find('county_input')
  }

  get city() {
    return this.targets.find('city_input')
  }

  get state_url() {
    return this.state.selectedOptions[0].getAttribute('url')
  }

  get county_url() {
    return this.county.selectedOptions[0].getAttribute('url')
  }

  request_data(url, callback) {
    Rails.ajax({
      type: 'GET',
      url: url,
      success: callback,
      error: function (response) { }
    })
  }
  test() {
    console.log("test")
    this.stimulate("CitySelector#test")
  }
}