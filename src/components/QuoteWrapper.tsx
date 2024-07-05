import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type QuoteWrapperType = {
  className?: string;
  imageLummiCategoryavatars?: string;
  testimonial?: string;
  name1?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMarginLeft?: CSSProperties["marginLeft"];
};

const QuoteWrapper: FunctionComponent<QuoteWrapperType> = ({
  className = "",
  imageLummiCategoryavatars,
  testimonial,
  name1,
  propBackgroundColor,
  propMarginLeft,
}) => {
  const quoteWrapperStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      marginLeft: propMarginLeft,
    };
  }, [propBackgroundColor, propMarginLeft]);

  return (
    <div
      className={`flex-1 bg-white flex flex-row flex-wrap items-center justify-center py-[166.5px] px-20 box-border min-w-[280px] min-h-[640px] max-w-full text-center text-9xl text-gray-100 font-merriweather mq750:gap-[20px] mq750:py-[108px] mq750:px-10 mq750:box-border mq750:w-[calc(100%_-_40px)] ${className}`}
      style={quoteWrapperStyle}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-[12px] max-w-[480px] mq750:max-w-full">
        <img
          className="w-[140px] h-[140px] relative rounded-281xl object-cover"
          loading="lazy"
          alt=""
          src={imageLummiCategoryavatars}
        />
        <div className="w-full flex flex-col items-center justify-center min-w-[304px] max-w-[720px] mq750:gap-[20px] mq750:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
            <blockquote className="m-0 self-stretch relative leading-[138%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] mq450:text-3xl mq450:leading-[31px]">
              {testimonial}
            </blockquote>
            <div className="self-stretch relative text-sm leading-[160%] text-dimgray">
              {name1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteWrapper;
