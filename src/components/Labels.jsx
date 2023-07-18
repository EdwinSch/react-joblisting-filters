const Labels = ({ role, level, languages }) => {
  return (
    <div className="labels-wrapper">
      <div className="flag-static">{role}</div>
      <div className="flag-static">{level}</div>

      {languages.map((lang, index) => {
        return (
          <div key={index} className="flag-static">
            {lang}
          </div>
        );
      })}
    </div>
  );
};

export default Labels;
