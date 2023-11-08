import PropTypes from "prop-types";

export default function Product({ title }) {
	return <li>{title}</li>;
}

Product.propTypes = {
	title: PropTypes.string.isRequired,
};
