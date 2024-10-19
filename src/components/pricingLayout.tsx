interface PricingTabProps {
  planName?: string;
  planTitle?: string;
  tag?: string;
  price?: number;
  discount?: number;
  planDescription?: string;
  features: string[];
  planUse: string[];
  btnText: string;
}
import Tick from "@/assets/tickIcon.svg";
import TickBooster from "@/assets/tickBooster.svg";
import Image from "next/image";

function PricingLayout(props: PricingTabProps) {
  return (
    <div className="w-[280px] h-[712px] flex justify-center mb-10">
      <div
        className={` w-full h-full bg-[#FFFFFF] border border-[#E5E7EB] shadow-md rounded-lg
      ${
        props.planName == "Booster" &&
        " bg-gradient-to-b from-[#1E429F] to-[#0B1839] border-[#1A56DB]"
      }
      `}
      >
        <div className="pl-8 pt-8">
          <div className="leading-normal">
            <div className="flex justify-between pr-4">
              <h2
                className={`pb-[14px] font-medium text-base tex-[#1F2A37]
              ${props.planName === "Booster" && "text-white"}
              `}
              >
                {props.planName}
              </h2>
              {props.tag && (
                <h2 className="w-[62.6px] h-[22.13px] bg-[#CEE0FF] rounded-xl text-[#053D99] text-[12.47px] flex justify-center items-center">
                  {props.tag}
                </h2>
              )}
            </div>
            {props.price ? (
              <div className="flex items-end gap-2">
                <h1
                  className={`font-extrabold text-4xl text-[#111928]
                  ${props.planName === "Booster" && "text-[#ffff]"}
                  `}
                >
                  {"$" + props.price}
                </h1>
                <p
                  className={`font-medium text-[16px] text-[#6B7280]
                  ${props.planName === "Booster" && "text-[#ffff]"}
                  `}
                >
                  /month
                </p>
              </div>
            ) : (
              <h1 className="font-extrabold text-4xl text-[#111928]">
                {props.planTitle}
              </h1>
            )}

            {props.discount ? (
              <div className="w-[142.85px] h-[22.13px] flex mt-1 gap-1">
                <div className=" flex items-center justify-center   h-full w-1/2 rounded-xl bg-[#ECFDF3]">
                  <p className="font-medium text-[12.47px] text-[#027A48]">
                    50% off
                  </p>
                </div>
                <div className="h-full">
                  <p
                    className={`font-extrabold leading-none text-[21.31px] text-[#6B7280]  line-through
                    ${props.planName === "Booster" && "text-[#ffff]"}
                    `}
                  >
                    {"$" + props.discount}
                  </p>
                </div>
              </div>
            ) : (
              <p className="pt-2 font-normal text-[12px] text-[#6B7280]">
                {props.planDescription}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col pl-8 w-[232px] justify-center pt-[26px] gap-2 ">
          {props.features.map((item, index) => {
            return (
              <div key={index} className="flex gap-[10px]">
                {props.planName === "Booster" ? (
                  <Image src={TickBooster} width={10} height={10} alt="tick" />
                ) : (
                  <Image src={Tick} width={10} height={10} alt="tick" />
                )}
                <p
                  className={`text-[#6B7280] font-normal text-[14.25px]
                  ${props.planName === "Booster" && "text-[#ffff]"}
                  `}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>

        <div className=" absolute top-[508px]">
          <div
            data-orientation="horizontal"
            className="h-[1px] w-[240px] mx-5 my-5  bg-[#76A9FA] "
          ></div>
          <div className="pl-8 flex flex-col gap-2">
            {props.planUse.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`text-[#6B7280] text-wrap w-[232px] font-semibold text-[14.25px]
                    ${props.planName === "Booster" && "text-[#F9FAFB]"}
                    `}
                >
                  {item}
                </li>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" absolute top-[650px]">
        <button
          className={`w-[232px] h-[36.82px] font-medium text-[12.47px] text-white rounded-md bg-[#1A56DB]
          ${props.planName === "Booster" && "bg-[#ffff] text-[#1F2A37]"}
          `}
        >
          {props.btnText}
        </button>
      </div>
    </div>
  );
}

export default PricingLayout;
