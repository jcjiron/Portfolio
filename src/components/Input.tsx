import { FunctionComponent } from "react";

export type InputType = {
  className?: string;
  label?: string;
  textContainerPlaceholder?: string;
};

const Input: FunctionComponent<InputType> = ({
  className = "",
  label,
  textContainerPlaceholder,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center gap-[4px] min-w-[230px] text-left text-sm text-whitesmoke-100 font-merriweather ${className}`}
    >
      <div className="self-stretch relative leading-[160%]">{label}</div>
      <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start py-[15px] px-4 border-[1px] border-solid border-gainsboro">
        <input
          className="w-[171px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-center justify-start py-0 px-1 box-border font-merriweather text-sm text-dimgray"
          placeholder={textContainerPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default Input;
