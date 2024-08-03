import { InputFieldProps } from "../../types/types";

const InputSearching: React.FC<InputFieldProps> = ({
  city,
  handleCityChange,
  loading,
  LoadingIcon,
}) => {
  return (
    <div className=" mt-[56px] xs:mt-[32px] relative  ">
      <input
        className=" xs:w-[311px] w-full md:w-[504px] lg:w-[504px] xsm:w-[200px] xsm:justify-center  h-[56px] flex justify-center text-[16px] font-normal rounded-[8px] px-[20px] bg-inputBg text-mediumGray"
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Search Location"
      />
      {loading && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <img src={LoadingIcon} className="animate-spin" alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default InputSearching;
