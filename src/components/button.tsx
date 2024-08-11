
type ButtonProps = {
    variant: 'primary' | 'secondary';
    size: string;
    text: string;
    onClick:() => void;
}

const BtnVariantStyles = {
    primary: 'bg-primary border-primary text-light',
    secondary: 'bg-white border-border text-secondary',
}

const Button = ({variant, size, text, onClick }: ButtonProps) => {
  return (
    <button
          className={`${BtnVariantStyles?.[variant]??''} ${size} py-[10px] px-[18px] border-[1px] rounded-lg text-base font-medium`}
          onClick={onClick}
    >
      {text}
    </button>

  );
}

export { Button }
