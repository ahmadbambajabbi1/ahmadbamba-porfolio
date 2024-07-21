type propsType = {
  title: string;
};
const SmallTitile = ({ title }: propsType) => {
  return (
    <p className="relative text-secondaryColor hero-intro uppercase text-lg inline-block pb-1">
      <span className="relative after:absolute after:left-0 after:h-1 after:bg-secondaryColor after:-bottom-1 after:w-[90%] after:content-['']">
        {title}
      </span>
    </p>
  );
};

export default SmallTitile;
