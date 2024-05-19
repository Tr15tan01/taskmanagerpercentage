import { useState } from "react";

const SubtaskComponent = ({ subtasks }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    console.log("checked");
  };
  return (
    <div>
      {subtasks?.map((item) => {
        return (
          <div
            className="grid lg:grid-cols-2 gap-6 sm:grid-rows-1"
            key={item.title}
          >
            <div className=" m-auto">
              <p>{item.title}</p>
            </div>
            <div className="form-control px-6">
              <label className="label cursor-pointer">
                <span className="label-text">The task is complete</span>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={handleChange}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SubtaskComponent;
