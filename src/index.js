/* global module */
import getMessage from './hello';

module.exports = ({
  hello: {
    render
  }
  
});

function render({ target }) {
  target.innerText = getMessage();
}
