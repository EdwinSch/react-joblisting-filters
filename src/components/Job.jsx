import Flags from "./Flags";
import StackLabels from "./StackLabels";

const Job = ({
  company,
  logo,
  newEntry,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
}) => {
  return (
    <article className={featured ? "job-wrapper border-left" : "job-wrapper"}>
      {/* General Information */}
      <div className="general-info-wrapper">
        <img src={logo} alt={company} className="img" />
        <div className="col">
          <div className="sub-header">
            <h2>{company}</h2>
            <Flags newEntry={newEntry} feature={featured} />
          </div>
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
      {/* Labels */}
      <StackLabels languages={languages} />
    </article>
  );
};

export default Job;
