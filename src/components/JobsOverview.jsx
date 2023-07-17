import Job from "./Job";

const JobsOverview = ({ jobs }) => {
  return (
    <section className="jobs-container">
      {jobs.map((job) => {
        return <Job key={job.id} {...job} />;
      })}
    </section>
  );
};

export default JobsOverview;
