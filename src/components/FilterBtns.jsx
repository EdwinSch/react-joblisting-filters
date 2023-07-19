const FilterBtns = ({ buttons, filterJobs }) => {
  return (
    <>
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
    </>
  );
};

export default FilterBtns;
