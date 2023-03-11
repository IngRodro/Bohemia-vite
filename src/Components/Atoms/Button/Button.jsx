import StyleButton from './style';
import Loading from '../Loading';

function Button({
  className,
  onClick,
  color = 'primary',
  labelColor = 'buttonText',
  loading = false,
  disabled = false,
  children,
}) {
  return (
    <StyleButton
      $color={color}
      $labelColor={labelColor}
      onClick={onClick}
      disabled={loading || disabled}
      className={`btn ${className}`}
    >
      {loading && <Loading />}
      {children}
    </StyleButton>
  );
}

export default Button;
