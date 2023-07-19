const FilterBtns = ({ buttons, filterJobs }) => {
  return (
    <div className="btns-row">
      <h3>Filters:</h3>
      {buttons.map((button) => {
        return (
          <button
            key={button}
            type="button"
            className="btn"
            onClick={() => filterJobs(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBtns;
