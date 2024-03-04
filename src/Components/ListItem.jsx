const ListItem = ({ title, image, description,style }) => { 
  return (
    <div style={style} className="bg-green-50 border-b-2">
      <img src={image} alt="placeholder image" />
      <h3 className="text-xl py-3 font-medium text-red-500">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ListItem;
