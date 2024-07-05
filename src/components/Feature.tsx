import { FunctionComponent } from "react";

export type FeatureType = {
  className?: string;
  iconIcon?: string;
  featureTitle?: string;
  featureDescription?: string;
};

const Feature: FunctionComponent<FeatureType> = ({
  className = "",
  iconIcon,
  featureTitle,
  featureDescription,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[272px] max-w-[400px] text-left text-lg text-gray-100 font-merriweather mq450:max-w-full ${className}`}
    >
      <div className="w-12 h-12 flex flex-row items-center justify-center py-0 px-0 box-border relative gap-[12px]">
        <div className="h-full w-full absolute !m-[0] top-[calc(50%_-_24px)] left-[calc(50%_-_23.7px)] rounded-[50%] bg-palegoldenrod" />
        <img
          className="h-6 w-6 relative z-[1]"
          loading="lazy"
          alt=""
          src={iconIcon}
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
        <div className="self-stretch relative leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
          {featureTitle}
        </div>
        <div className="self-stretch relative text-sm leading-[160%] text-dimgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
          {featureDescription}
        </div>
      </div>
    </div>
  );
};

export default Feature;
