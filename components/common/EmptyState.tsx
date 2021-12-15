const EmptyState = (props) => {
  return (
    <div className={`empty-state ${props.cart && 'cart'}`}>
      {props.cart && (
        <div>
          <p>
            <i className="fa-solid fa-cart-plus"></i>
          </p>
          <h6>{props.title || 'Хоосон байна.'}</h6>
        </div>
      )}
    </div>
  );
};

export default EmptyState;
