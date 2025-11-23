const InfoBox = ({ title, items = [] }) => {
  return (
    <div className="info-box">
      <h3>{title}</h3>
      <ul>
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>&nbsp;</li>
        )}
      </ul>
    </div>
  );
};

export default InfoBox;
