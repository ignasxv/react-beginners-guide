interface ButtonProps {
  text: string;
  color?: 'primary' | 'danger' | 'warning';
  whenClicked: (name: string) => void;
}

const Button = ({ text, color = 'primary', whenClicked }: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => {
          whenClicked(color);
        }}
      >
        <h1>{text}</h1>A {color} Button
      </button>
    </>
  );
};

export default Button;
