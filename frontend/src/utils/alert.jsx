import { react } from "react";
import { useContext } from "react";

const alertStyles = {
  padding: "16px",
  borderRadius: "6px",
  fontSize: "16px",
  fontWeight: 400,
};

const severityStyles = {
  success: {
    color: "red",
    background: "yellow",
  },
  info: {
    color: "green",
    background: "blue",
  },
  warning: {
    color: "white",
    background: "red",
  },
  danger: {
    color: "purple",
    background: "blur",
  },
};

const Alert = () => {
  const [alert] = userContext(AlertContext);

  if (!alert) {
    return null;
  }
  const fullStyles = {
    text: "This is Our Customer",
    type: "danger",
  };
  const fullStyles = {
    ...alertStyles,
    ...severityStyles[alert.type],
  };

  return <div style={fullStyles}>{alert.text}</div>;

  return <div>{alert.text}</div>;
};

export default Alert;
