const Stepper = ({ activeStep }) => {
  return (
    <div className="stepper-horizontal">
      <div className={`step active ${activeStep === 2 && 'done'} ${activeStep === 3 && 'done'}`}>
        <div className="step-circle">
          <span>1</span>
        </div>
        <div className="step-title">Салбар сонгох</div>
        <div className="step-bar-left"></div>
        <div className="step-bar-right"></div>
      </div>
      <div className={`step ${activeStep === 2 && 'active'} ${activeStep === 3 && 'active done'}`}>
        <div className="step-circle">
          <span>2</span>
        </div>
        <div className="step-title">
          Засварын төрөл <br /> Өдөр сонгох
        </div>
        <div className="step-bar-left"></div>
        <div className="step-bar-right"></div>
      </div>
      <div className={`step ${activeStep === 3 && 'active'}`}>
        <div className="step-circle">
          <span>3</span>
        </div>
        <div className="step-title">Баталгаажуулах</div>
        <div className="step-bar-left"></div>
        <div className="step-bar-right"></div>
      </div>
    </div>
  );
};
export default Stepper;
