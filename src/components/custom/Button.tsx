type propsType = {
  firstText: string;
  Secondtext: string;
};
const Button = ({ Secondtext, firstText }: propsType) => {
  return (
    <button className="bg-gradient-to-br from-secondaryColor capitalize  via-primaryColor to-secondaryColor px-5 py-2 rounded-xl hover:!bg-gradient-to-br hover:from-secondaryColor hover:to-secondaryColor hover:text-white">
      <span className="text-secondaryColor font-extrabold">{firstText}</span>{" "}
      {Secondtext}
    </button>
  );
};

export default Button;
