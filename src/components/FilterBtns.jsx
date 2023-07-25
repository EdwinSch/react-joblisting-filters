import SingleButton from "./SingleButton";

const FilterBtns = ({ buttons, filterJobs }) => {
  // console.log(buttons);

  return (
    <div className="btns-row">
      <h3>Filters:</h3>
      {buttons.map((button, index) => {
        return (
          <SingleButton key={index} button={button} filterJobs={filterJobs} />
        );
      })}
    </div>
  );
};

export default FilterBtns;
