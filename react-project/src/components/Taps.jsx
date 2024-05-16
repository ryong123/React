export default function Tabs({ children, buttons, ButtonCaontainer }) {
  // const ButtonContailner = buttonCaontainer;
  return (
    <>
      <ButtonContailner>{buttons}</ButtonContailner>
      {children}
    </>
  );
}
