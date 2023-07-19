import FilterBtns from "./filterBtns";
import Job from "./Job";

const JobsOverview = ({ jobs, buttons, filterJobs }) => {
  return (
    <section className="jobs-container">
      <div className="selected-labels-container">
        <FilterBtns buttons={buttons} filterJobs={filterJobs} />
      </div>
      {jobs.map((job) => {
        return <Job key={job.id} {...job} />;
      })}
    </section>
  );
};

export default JobsOverview;
