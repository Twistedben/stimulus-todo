import { Controller } from "stimulus"
import moment from "moment"

export default class extends Controller {
  static targets = [ "time_zone", "display_time", "display_time_zone" ]

  initialize() {
    this.setTimeZone = this.time_zone
    setInterval( () => {
      this.render()
    }, 1000 )
    this.render()
  }

  render() {
    // console.log(this.time_zone)
    this.display_time.innerHTML = moment().tz(this.time_zone).format('MMMM Do YYYY, h:mm:ss a')
    this.display_time_zone.innerHTML = this.time_zone
  }

  changed_zone() {
    this.setPreviousTimeZone = this.data.get('time_zone')
    this.setTimeZone = this.time_zone
    this.render()
  }

  // Overriding the value of select to the previous timezone's data value
  set_previous_time_zone() {
    this.select_time_zone.value = this.data.get("previous_time_zone")
    this.render()
  }

  // Returns value of time zone select element (element's value working off static target set above)
  get time_zone() {
    return this.time_zoneTarget.value
  }

  // Returns the select element
  get select_time_zone() {
    return this.time_zoneTarget
  }

  // Returns the entire element
  get display_time() {
    return this.display_timeTarget
  }

  // Returns entire element
  get display_time_zone() {
    return this.display_time_zoneTarget
  }


  set setTimeZone(value) {
    this.data.set("time_zone", value)
  }

  set setPreviousTimeZone(value) {
    this.data.set("previous_time_zone", value)
  }

  
}