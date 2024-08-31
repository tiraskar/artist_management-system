import PropTypes from "prop-types";

const CustomFormField = ({
  props,
  label,
  className,
  type = "text",
  handleChange,
  required = true,
  labelColor = 'black'
}) => {

  return (
    <div className="flex flex-col gap-y-2">
      <label className={`flex text-lg text-${labelColor}`}>
        {label}
      </label>
      <input
        name={name}
        {...props}
        type={type}
        onChange={handleChange}
        className={`default-input ${className}`}
        required={required}
      />
    </div>
  );
};

CustomFormField.propTypes = {
  props: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.object,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  labelColor: PropTypes.string
};

export default CustomFormField;