import { useState } from "react";

const SingleButton = ({ button, filterJobs }) => {
  //   const [active, setActive] = useState(false);

  return (
    <button type="button" className="btn" onClick={() => filterJobs(button)}>
      {button}
    </button>
  );
};

export default SingleButton;
