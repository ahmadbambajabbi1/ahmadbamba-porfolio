type propsType = {
  title: string;
};
const SmallTitile = ({ title }: propsType) => {
  return (
    <p className="relative mb-5 text-[#140b29] hero-intro uppercase text-lg inline-block pb-1">
      <span className="relative after:absolute after:left-0 after:h-1 after:bg-[#140b29] after:-bottom-1 after:w-[90%] after:content-['']">
        {title}
      </span>
    </p>
  );
};

export default SmallTitile;
