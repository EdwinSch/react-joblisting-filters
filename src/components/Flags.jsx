const Flags = ({ newEntry, feature }) => {
  if (newEntry && feature) {
    return (
      <>
        <div className="flag new-flag">new!</div>
        <div className="flag feature-flag">featured</div>
      </>
    );
  } else if (newEntry) {
    return <div className="flag new-flag">new!</div>;
  }

  return;
};

export default Flags;
