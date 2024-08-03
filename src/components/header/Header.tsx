import logo from "../../assets/images/Vector.svg";
const SearchHeader = () => {
  return (
    <div>
      <header className="flex justify-center  pt-12 font-[Nunito]">
        <img src={logo} alt="Weather App Logo" className="mr-2" />
        <span className="text-mutedGray font-bold text-xl ">Weather App</span>
      </header>

      <section className="text-center mt-40 xs:mt-[192px]">
        <h1 className="font-bold text-lightGray text-[32px] xs:text-[20px]  lg:text-4xl font-[Nunito]">
          Welcome to
          <span className="text-lightBlue xs:text-lightGray text-[32px] xs:text-[20px] font-[Nunito]">
          &nbsp;Weather App
          </span>
        </h1>
        <p className="text-mutedGray text-[20px] xs:text-[14px] sm:text-base lg:text-lg font-[Nunito] mt-2 xs:mt-1 font-normal">
          Choose a location to see Weather forecast
        </p>
      </section>
    </div>
  );
};

export default SearchHeader;
