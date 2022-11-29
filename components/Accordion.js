import { useState } from "react";
import Image from "next/image";
import Arrow from "../public/icon-arrow-down.svg";

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className='flex flex-col'>
        <div className='flex justify-between my-2'>
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
        <span
          className={
            active
              ? "border-b-2 border-LightGrayishBlue relative top-[4rem]"
              : "border-b-2 border-LightGrayishBlue relative top-[1rem]"
          }></span>
      </div>
      {active && (
        <p
          className='text-DarkGrayishBlue text-xs w-full py-2 cursor-pointer'
          onClick={() => setActive(!active)}>
          {content}
        </p>
      )}
    </div>
  );
};

export default Accordion;
