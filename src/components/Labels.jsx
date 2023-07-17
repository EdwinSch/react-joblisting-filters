const Labels = ({ role, level, languages, tools }) => {
  return (
    <div className="labels-wrapper">
      <button type="button" className="filter-btn">
        {role}
      </button>
      <button type="button" className="filter-btn">
        {level}
      </button>

      {languages.map((lang, index) => {
        return (
          <button key={index} type="button" className="filter-btn">
            {lang}
          </button>
        );
      })}
    </div>
  );
};

export default Labels;
