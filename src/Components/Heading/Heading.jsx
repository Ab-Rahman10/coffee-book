const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="text-gray-600 font-thin">{subtitle}</p>
      </div>
    </div>
  );
};

export default Heading;
