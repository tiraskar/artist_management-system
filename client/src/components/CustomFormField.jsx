import PropTypes from "prop-types";

export const inputField = {
  TEXT: 'TEXT',
  RADIO: 'RADIO',
}

const CustomFormField = ({
  props,
  name,
  label,
  className,
  type = "text",
  handleChange,
  required = true,
  labelColor = 'black',
  placeholder,
  inputType,
  value
}) => {

  const renderInput = () => {
    switch (inputType) {
      case "RADIO":
        return (
          <input type="radio"
            {...props}
            name={name}
            value={value}
            className='h-4 w-4'
          />
        );

      default:
        return (
          <input
            name={name}
            {...props}
            type={type}
            onChange={handleChange}
            className={`default-input ${className}`}
            required={required}
            placeholder={placeholder}
            value={value}
          />
        );
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      <label className={`flex text-lg text-${labelColor}`}>
        {label}
      </label>
      {renderInput()}
    </div>
  );
};

CustomFormField.propTypes = {
  props: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  labelColor: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.any,
};

export default CustomFormField;
