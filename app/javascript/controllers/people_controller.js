import { Controller } from 'stimulus'
import StimulusReflex from 'stimulus_reflex'
/* This is the custom StimulusReflex controller for PeopleReflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends Controller {
  connect() {
    StimulusReflex.register(this)
  }
  /* Reflex specific lifecycle methods.
   * Use methods similar to this example to handle lifecycle concerns for a specific Reflex method.
   * Using the lifecycle is optional, so feel free to delete these stubs if you don't need them.
   *
   * Example:
   *
   *   <a href="#" data-reflex="PeopleReflex#example">Example</a>
   *
   * Arguments:
   *
   *   element - the element that triggered the reflex
   *             may be different than the Stimulus controller's this.element
   *
   *   reflex - the name of the reflex e.g. "PeopleReflex#example"
   *
   *   error - error message from the server
   */

  beforeChange(element, reflex) {
    console.log(element)
    console.log(reflex)
    if (element.value == "blah") {
      element.parentElement.append("Can't write Blah!")
    }
  }
  afterChange(element, reflex) {
    console.log(element)
    console.log(reflex)
  }
  changeSuccess(element, reflex) {
    console.log(element)
    console.log(reflex)
  }

  // updateSuccess(element, reflex) {
  //   element.innerText = 'Updated Successfully.'
  // }

  // updateError(element, reflex, error) {
  //   console.error('updateError', error);
  //   element.innerText = 'Update Failed!'
  // }
}
