import StyleTitle from './style';

function Title({
  children,
  htmlTag = 'h2',
  color = 'text',
  size = 45,
  lineHeight = size + 20,
  button = false,
  fontFamily = 'Arial Narrow',
}) {
  return (
    <StyleTitle
      as={htmlTag}
      $size={size}
      $color={color}
      $lineHeight={lineHeight}
      $button={button}
      $fontFamily={fontFamily}
    >
      {children}
    </StyleTitle>
  );
}

export default Title;
