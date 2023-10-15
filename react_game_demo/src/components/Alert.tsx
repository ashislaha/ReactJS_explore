import { ReactNode } from "react";

interface AlertProps {
  // it's type, it can be string or html
  // for HTML, we can use ReactNode type
  // Using children prop, we can pass children to a component
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
