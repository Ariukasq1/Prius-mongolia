const EmptyState = (props) => {
  return (
    <div className="empty-state">
      <h6>{props.title || 'Хоосон байна.'}</h6>
    </div>
  );
};

export default EmptyState;
