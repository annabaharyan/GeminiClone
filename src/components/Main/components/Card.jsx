const Card = ({desc,imageUrl}) => {
  return (
    <div className="card">
      <p>{desc}</p>
      <img src={imageUrl} alt="compas" />
    </div>
  );
};

export default Card;
