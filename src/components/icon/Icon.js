import React, { Component } from "react";
import PropTypes from "prop-types";

import { Platform } from "react-native";

import  BaseIcon  from "./BaseIcon";
import ic from "./IconCommon.json";
import styles from './styles';

class Icon extends Component {

	getName() {
		if (this.props.type === "Ionicons") {
			if (typeof ic[this.props.name] !== "object") {
				return this.props.name;
			} else if (typeof ic[this.props.name] === "object") {
				let name;
				if (Platform.OS === "ios") {
					name = this.props.active ? ic[this.props.name].ios.active : ic[this.props.name].ios.default;
				} else {
					name = this.props.active ? ic[this.props.name].android.active : ic[this.props.name].android.default;
				}
				return name;
			}
		} else {
			return this.props.name;
		}
	}

	getIconName() {
		if (Platform.OS === "ios") {
			if (this.props.ios) {
				return this.props.ios;
			} else {
				return this.props.active ? ic[this.props.name].ios.active : ic[this.props.name].ios.default;
			}
		} else if (this.props.android) {
			return this.props.android;
		} else {
			return this.props.active ? ic[this.props.name].android.active : ic[this.props.name].android.default;
		}
	}

	render() {
		if (this.props.ios && this.props.android) {
			return (
				<BaseIcon style={styles.icon}
					{...this.props}
					name={Platform.OS === "ios" ? this.props.ios : this.props.android}
				/>
			);
		} else if (this.props.name && (this.props.android || this.props.ios)) {
			return <BaseIcon style={styles.icon} {...this.props} name={this.getIconName()} />;
		} else {
			return <BaseIcon style={[(!this.props.color) && styles.color, (!this.props.size) && styles.size , this.props.style]} {...this.props} name={this.getName()} />;
		}
	}
}

Icon.propTypes = {
	...BaseIcon.propTypes,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
	name: PropTypes.string,
	ios: PropTypes.string,
	android: PropTypes.string,
	active: PropTypes.bool,

	size: PropTypes.number,
	color: PropTypes.string,
};

Icon.defaultProps = {
	...BaseIcon.defaultProps
}

export default Icon;