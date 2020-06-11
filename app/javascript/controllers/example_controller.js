import ApplicationController from './application_controller'
/* This is the custom StimulusReflex controller for ExampleReflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {

  /* Reflex specific lifecycle methods.
   * Use methods similar to this example to handle lifecycle concerns for a specific Reflex method.
   * Using the lifecycle is optional, so feel free to delete these stubs if you don't need them.
   *
   * Example:
   *
   *   <a href="#" data-reflex="ExampleReflex#example">Example</a>
   *
   * Arguments:
   *
   *   element - the element that triggered the reflex
   *             may be different than the Stimulus controller's this.element
   *
   *   reflex - the name of the reflex e.g. "ExampleReflex#example"
   *
   *   error - error message from the server
   */

  // beforeUpdate(element, reflex) {
  //  element.innerText = 'Updating...'
  // }

  // updateSuccess(element, reflex) {
  //   element.innerText = 'Updated Successfully.'
  // }

  // updateError(element, reflex, error) {
  //   console.error('updateError', error);
  //   element.innerText = 'Update Failed!'
  // }
  startEdit(element, reflex) {
    console.log('test')
    console.log(reflex)
    console.log(element)
    console.log(this.element)
    console.log(this)
    this.element.classList.add('text-danger')
    this.stimulate('ExampleReflex#edit')
  }
  afterEdit(element) {
    this.highlight("tr")
  }

  beforePoke(element, reflex) {
    console.log(reflex)
    element.innerText = 'Poking...'
    element.classList.add('btn-primary')
  }
  afterPoke(element) {
    element.innerText = 'Poked!'
  }
  pokeSuccess(element, reflex) {
    element.classList.add('btn-success')
    console.log(reflex)
  }
  pokeError(element, reflex, error) {
    console.error('pokeError', error);
    element.innerText = 'Poke Failed!'
  }

  beforePurge(element) {
    element.innerText = 'Purging...'
  }
}
