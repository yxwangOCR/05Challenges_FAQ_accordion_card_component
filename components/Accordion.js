import { useState } from "react";
import Image from "next/image";
import Arrow from "../public/icon-arrow-down.svg";

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState(false);

  return (
    <div className='m-0 p-0 w-[260px] md:w-[350px]'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center gap-3 my-2'>
          <p
            className={
              active
                ? "text-darkBlue text-xs font-bold cursor-pointer"
                : "text-DarkGrayishBlue text-xs cursor-pointer"
            }
            onClick={() => setActive(!active)}>
            {title}
          </p>

          <Image
            src={Arrow}
            alt='arrow-icon'
            onClick={() => setActive(!active)}
            className={
              active
                ? "cursor-pointer w-[10px] h-[8px] rotate-180"
                : "cursor-pointer w-[10px] h-[8px]"
            }
          />
        </div>
        <hr
          className={
            active
              ? "border-b-1 border-LightGrayishBlue relative top-[50px]"
              : "border-b-1 border-LightGrayishBlue relative top-[8px]"
          }></hr>
      </div>
      {active && (
        <p
          className='text-DarkGrayishBlue text-[0.6rem] w-[15rem] md:w-[20rem] p-0 m-0 cursor-pointer'
          onClick={() => setActive(!active)}>
          {content}
        </p>
      )}
    </div>
  );
};

export default Accordion;
