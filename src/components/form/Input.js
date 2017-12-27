import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Animated,
  Easing,
  TextInput,
  StyleSheet,
  Platform,
  Dimensions,
  Text as NativeText,
} from 'react-native';
import styles from './styles';



class Input extends Component {
  constructor(props) {
    super(props);
  }


  getRef = () => {
    return this.input || this.refs[this.props.textInputRef];
  };

  getRefHandler = () => {
    if (this.props.textInputRef) {
      if (typeof this.props.textInputRef === 'function') {
        return input => {
          this.input = input;
          this.props.textInputRef(input);
        };
      } else {
        return this.props.textInputRef;
      }
    } else {
      return input => (this.input = input);
    }
  };

  focus() {
    this.getRef() && this.getRef().focus();
  }

  blur() {
    this.getRef() && this.getRef().blur();
  }

  clearText() {
    this.getRef() && this.getRef().clear();
  }

  render() {
    const {
      inputStyle,
      rounded,
      ...attributes
    } = this.props;

    return (
        <TextInput
          {...attributes}
          ref={this.getRefHandler()}
          underlineColorAndroid={rounded && "rgba(0,0,0,0)"}
          style={[
            styles.input,
            rounded && styles.roundedInput,
            { fontSize: 14 },
            inputStyle && inputStyle,
          ]}
        />
    );
  }
}

Input.propTypes = {
  inputStyle: NativeText.propTypes.style,
};




export default Input;