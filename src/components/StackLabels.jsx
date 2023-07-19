const StackLabels = ({ languages }) => {
  return (
    <div className="labels-wrapper">
      {languages.map((lang, index) => {
        return (
          <div key={index} className="label-static">
            {lang}
          </div>
        );
      })}
    </div>
  );
};

export default StackLabels;
