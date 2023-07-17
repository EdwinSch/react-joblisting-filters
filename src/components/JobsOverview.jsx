import Job from "./Job";

const JobsOverview = ({ jobs }) => {
  return (
    <section className="jobs-container">
      <div className="selected-labels-container">{/* labels */}</div>
      {jobs.map((job) => {
        return <Job key={job.id} {...job} />;
      })}
    </section>
  );
};

export default JobsOverview;
