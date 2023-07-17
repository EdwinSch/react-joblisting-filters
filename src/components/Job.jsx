const Job = ({
  company,
  logo,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <article className="job-wrapper">
      <div className="general-info-wrapper">
        <img src={logo} alt={company} className="img" />
        <div className="col">
          <h2>{company}</h2>
          <h3>{position}</h3>
          <div className="time-location-wrapper">
            <p>{postedAt}</p>
            <div className="dot">{/* CSS dot */}</div>
            <p>{contract}</p>
            <div className="dot">{/* CSS dot */}</div>
            <p>{location}</p>
          </div>
        </div>
      </div>
      {/* SB */}
      <div className="labels-wrapper">labels</div>
    </article>
  );
};

export default Job;
