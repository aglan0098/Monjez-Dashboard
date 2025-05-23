function Card({ name, number, bgColor, icon: Icon, onClick }) {
  return (
    <div
      className={`p-6 rounded-2xl text-center cursor-pointer hover:opacity-90 transition-opacity`}
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <p className="w-fit m-auto p-3 bg-white rounded-full">
        <Icon className="w-6 h-6 text-gray-600" />
      </p>
      <p className="my-3 text-lg font-semibold">{number}</p>
      <p className="text-md">{name}</p>
    </div>
  );
}

export default Card;
