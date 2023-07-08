import propTypes from "prop-types";

function Button({ label }) {
  return (
    <button className="rounded-lg py-4 px-2 uppercase font-semibold text-base">
      {label}
    </button>
  );
}

Button.propTypes = {
  label: propTypes.string,
};

export default Button;
