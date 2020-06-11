import { Controller } from "stimulus"
import moment from "moment"

export default class extends Controller {
  static targets = [ "time_zone", "display_time", "display_time_zone" ]

  initialize() {
    // let that = this
    setInterval( () => {
      this.render()
    }, 1000 )
    this.render()
  }

  render() {
    // console.log(this.time_zone)
    this.display_time.innerHTML = moment().tz(this.time_zone).format('MMMM Do YYYY, h:mm:ss a')
    this.display_time_zone.innerHTML = this.time_zone
    this.setTimeZone = this.time_zone
  }

  changed_zone() {
    this.render()
  }

  get time_zone() {
    return this.time_zoneTarget.value
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
}