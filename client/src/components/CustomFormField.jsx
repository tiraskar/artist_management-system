import PropTypes from "prop-types";
import { forwardRef } from "react";

const CustomFormField = forwardRef(({
  name,
  label,
  className,
  type = "text",
  placeholder,
  inputType,
  errorMessage,
  labelColor,
  ...rest
}, ref) => {

  const renderInput = () => {
        return (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={`default-input  ${className} ${errorMessage ? 'outline-red-400' : ""}`}
            ref={ref}
            autoComplete={"off"}
            {...rest}
          />
        );
  };

  return (
    <div className="flex flex-col gap-y-2">
      {
        inputType !== "RADIO" && 
        <label className={`flex text-sm text-${labelColor}`}>
        {label}
      </label>
      }
      {renderInput()}
      {errorMessage && <span className="text-red-500 text-xs">{errorMessage}</span>}
    </div>
  );
});

// Set a display name for the component
CustomFormField.displayName = 'CustomFormField';

CustomFormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.any,
  errorMessage: PropTypes.string,
  labelColor: PropTypes.string,
  radioOptions: PropTypes.array,
};

export default CustomFormField;
