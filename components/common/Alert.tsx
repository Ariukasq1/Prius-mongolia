const Alert = ({ type, text }) => {
  if (type === 'small') {
    return (
      <div className={`alert small green`}>
        <p>{text}</p>
      </div>
    );
  }
  return (
    <div className={`alert ${type === 'warning' && 'warning'} ${type === 'error' && 'error'}`}>
      <i className="fa-solid fa-circle-exclamation"></i>
      <p>{text}</p>
    </div>
  );
};

export default Alert;
