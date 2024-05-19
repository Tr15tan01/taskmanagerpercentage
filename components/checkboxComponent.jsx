const CheckboxComponent = () => {
  return (
    <div>
      <div className="form-control px-6">
        <label className="label cursor-pointer">
          <span className="label-text">The task is complete</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
    </div>
  );
};
export default CheckboxComponent;
