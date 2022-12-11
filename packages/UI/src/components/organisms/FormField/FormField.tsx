import errorIcon from '../../../assets/icons/rawSvg/alert-triangle.svg';
import successIcon from '../../../assets/icons/rawSvg/check-circle.svg';
import Typography from '../../atoms/Typography';
import {
  Label,
  Input,
  StyledInlineErrorMessage,
  Icon,
  InputWrapper,
} from './StyledFormField';
import type { InputProps } from '.';

function FormField({
  label,
  id,
  placeholder,
  required = false,
  disabled = false,
  error,
  touched,
  onChange,
}: InputProps) {
  return (
    <>
      <Label htmlFor={id}>
        <Typography type="label">{label}</Typography>
        {required && <span style={{ color: 'red' }}>*</span>}
        <InputWrapper>
          <Input
            type="text"
            name={label}
            id={id}
            autoCorrect="off"
            autoComplete="off"
            placeholder={placeholder}
            valid={touched && !error}
            error={error}
            disabled={disabled}
            onChange={onChange}
          />
          {required && touched && (
            <Icon src={error ? errorIcon : successIcon} />
          )}
        </InputWrapper>
      </Label>
      {error && touched && (
        <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>
      )}
    </>
  );
}

export default FormField;
