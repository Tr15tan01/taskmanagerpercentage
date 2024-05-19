import ProgressComponent from "./progressComponent";
import SubtaskComponent from "./subtaskComponent";

const CardComponent = ({ title, description, subtasks }) => {
  return (
    <div className="card bg-base-100 shadow-xl w-full mt-5">
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className=" grid lg:grid-cols-2 gap-6 sm:grid-rows-1">
          <div className=" m-auto">
            <p>{description}</p>
          </div>
          <ProgressComponent />
        </div>
        <SubtaskComponent subtasks={subtasks} />
        <div className="card-actions grid lg:grid-cols-2 gap-6 sm:grid-rows-1">
          <button className="btn btn-accent">Add Subtask</button>
          <button className="btn btn-primary">Add Subtask</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
