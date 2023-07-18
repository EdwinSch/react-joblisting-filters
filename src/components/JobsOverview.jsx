import Job from "./Job";

const JobsOverview = ({ jobs, buttons, filterJobs }) => {
  return (
    <section className="jobs-container">
      <div className="selected-labels-container">
        {buttons.map((button, index) => {
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
      {jobs.map((job) => {
        return <Job key={job.id} {...job} />;
      })}
    </section>
  );
};

export default JobsOverview;
