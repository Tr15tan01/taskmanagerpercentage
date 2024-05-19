import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { main, getCars, getUsers } from "@/utile/db2";
import { addUser } from "@/utile/db4";

const ModalComponent = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [lastId, setLastId] = useState(null);

  const handleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const closeMOdal = () => {
    document.getElementById("my_modal_1").close();
  };

  // useEffect(() => {
  //   console.log("effect");
  //   getUsers().then((data) => {
  //     console.log(data.Items[2], "aws dynamo data");
  //     // res.send("project success " + data.Items[1].name);
  //     // console.log("second console.");
  //   });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskTitle);
    closeMOdal();
    // main(uuidv4(), taskTitle);
    addUser(uuidv4(), taskTitle);
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <input
            type="text"
            placeholder="Type here"
            name="taskTitle"
            className="input input-bordered input-accent w-full"
            onChange={handleChange}
          />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-success mx-3 px-9 text-white"
                onClick={handleSubmit}
                type="submit"
              >
                save
              </button>
              <button className="btn btn-error mx-3 px-9 text-white">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default ModalComponent;
