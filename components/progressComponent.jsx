const ProgressCoponent = () => {
  return (
    <div>
      <div
        className="radial-progress text-primary"
        style={{ "--value": 70 }}
        role="progressbar"
      >
        70%
      </div>
    </div>
  );
};
export default ProgressCoponent;
