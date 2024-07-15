import { ReactNode } from "react";

interface AlertProps{
    children : ReactNode;
    onClickButton: () => void; 
}


const Alert = ({children, onClickButton }: AlertProps) => {
  
  return (
    <div className="alert alert-primary" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        // data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClickButton}
      ></button>
    </div>
  );
}

export default Alert