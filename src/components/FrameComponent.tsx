import { FunctionComponent } from "react";
import Input from "./Input";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full text-left text-sm text-whitesmoke-100 font-merriweather mq1100:pb-[52px] mq1100:box-border mq450:pb-[34px] mq450:box-border ${className}`}
    >
      <div className="flex-1 bg-white flex flex-row items-center justify-center py-[120px] px-10 box-border max-w-full mq750:gap-[24px] mq1100:pt-[78px] mq1100:pb-[78px] mq1100:box-border mq450:pt-[51px] mq450:pb-[51px] mq450:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-[48px_46px] max-w-[1200px] mq750:gap-[23px] mq1275:max-w-full">
          <div className="flex-1 rounded-29xl bg-gray-100 overflow-hidden flex flex-col items-start justify-center p-12 box-border gap-[24px] min-w-[280px] max-w-full mq750:py-[31px] mq750:px-6 mq750:box-border">
            <Input label="Name" textContainerPlaceholder="Your Name" />
            <Input label="Email" textContainerPlaceholder="Your Email" />
            <div className="self-stretch flex flex-col items-start justify-center gap-[4px] min-w-[230px] min-h-[200px]">
              <div className="self-stretch relative leading-[160%]">
                Message
              </div>
              <div className="self-stretch h-[174px] rounded-lg bg-white box-border flex flex-row items-start justify-start p-4 text-dimgray border-[1px] border-solid border-gainsboro">
                <div className="w-[171px] flex flex-row items-center justify-start py-0 px-1 box-border">
                  <div className="w-24 relative leading-[160%] flex items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    Your Message
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[11.5px] px-6 bg-gold rounded-lg flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center p-1">
                <div className="relative text-sm leading-[160%] font-merriweather text-gray-200 text-center inline-block min-w-[34px]">
                  Send
                </div>
              </div>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center py-0 px-12 box-border gap-[40px] min-w-[230px] max-w-full text-lg text-gray-100 mq750:gap-[20px] mq750:pl-6 mq750:pr-6 mq750:box-border">
            <div className="w-full flex flex-col items-start justify-center gap-[12px] max-w-[800px] text-37xl font-karla mq1100:max-w-full">
              <b className="self-stretch relative leading-[120%] mq750:text-26xl mq750:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
                Contact Me
              </b>
              <div className="self-stretch relative text-3xl leading-[31px] font-merriweather mq450:text-lg mq450:leading-[25px]">
                Let's discuss your project
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-start gap-[16px] min-w-[272px] max-w-[400px] mq450:flex-wrap mq450:max-w-full">
              <img
                className="h-8 w-8 relative"
                loading="lazy"
                alt=""
                src="/icon--icon-6.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[211px] max-w-full">
                <div className="self-stretch relative leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                  Email
                </div>
                <div className="self-stretch relative text-sm leading-[160%] text-dimgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] whitespace-nowrap">
                  contact@juancarlos.com
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-start gap-[16px] min-w-[272px] max-w-[400px] mq450:flex-wrap mq450:max-w-full">
              <img
                className="h-8 w-8 relative"
                alt=""
                src="/icon--icon-7.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[211px] max-w-full">
                <div className="self-stretch relative leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                  Phone
                </div>
                <div className="self-stretch relative text-sm leading-[160%] text-dimgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  +1 (555) 123-4567
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-start gap-[16px] min-w-[272px] max-w-[400px] mq450:flex-wrap mq450:max-w-full">
              <img
                className="h-8 w-8 relative"
                loading="lazy"
                alt=""
                src="/icon--icon-8.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[211px] max-w-full">
                <div className="self-stretch relative leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
                  Location
                </div>
                <div className="self-stretch relative text-sm leading-[160%] text-dimgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  123 Web St, Tech City, Country
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
