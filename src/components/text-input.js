import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/text-input.scss';

class TextInput extends React.Component {
  componentDidMount () {
    this.editableSpan.focus();
  }

  clearTextOnEnter (event) {
    if (this.props.onKeyPress(event)) {
      this.editableSpan.innerHTML = "";
    }
  }

  render () {
    let { value, onKeyPress } = this.props;

    return (
      <div className="text-input">
        <span ref={span => this.editableSpan = span}
              contentEditable="true"
              onKeyPress={this.clearTextOnEnter.bind(this)} />
      </div>
    );
  }
}

TextInput.propTypes = {
  onKeyPress: PropTypes.func
};

export default TextInput;