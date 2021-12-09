const Alert = ({ type, text }) => {
  return (
    <div className={`alert ${type === 'warning' && 'warning'} ${type === 'error' && 'error'}`}>
      <i className="fa-solid fa-circle-exclamation"></i>
      <p>{text}</p>
    </div>
  );
};

export default Alert;
