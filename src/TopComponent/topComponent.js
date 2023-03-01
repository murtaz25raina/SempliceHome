import "./topComponent.css";

const TopComponent = () => {
  return (
    <div className="top-container">
      <div className="top-container-text-container">
        <div className="top-container-large-text">Join the</div>
        <div className="top-container-large-text">Semplice family</div>
        <div className="top-container-small-text">
          No monthly subscription, you only pay once.
          <span className="top-container-questionmark">
            ?
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopComponent;
