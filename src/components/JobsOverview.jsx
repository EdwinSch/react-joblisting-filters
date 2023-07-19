import FilterBtns from "./filterBtns";
import Job from "./Job";

const JobsOverview = ({ jobs, setJobs, buttons, filterJobs, data }) => {
  return (
    <section className="jobs-container">
      <div className="filter-btns-container">
        <FilterBtns buttons={buttons} filterJobs={filterJobs} />
        <button
          type="button"
          className="btn clear-btn"
          onClick={() => setJobs(data)}
        >
          clear filters
        </button>
      </div>
      {jobs.map((job) => {
        return <Job key={job.id} {...job} />;
      })}
    </section>
  );
};

export default JobsOverview;
