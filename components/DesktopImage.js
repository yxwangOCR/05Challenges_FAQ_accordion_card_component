import Image from "next/image";
import ImageDesktop from "../public/illustration-woman-online-desktop.svg";
import Box from "../public/illustration-box-desktop.svg";

const DesktopImage = () => {
  return (
    <div className=''>
      <Image
        src={Box}
        alt='box'
        className='absolute left-[-6rem] top-[15rem] z-10'
      />
      <div className='relative overflow-hidden w-[470px] h-[535px]'>
        <Image
          src={ImageDesktop}
          alt='Desktop-woman-online'
          className='relative left-[-5rem] bottom-[-7rem]'
        />
      </div>
    </div>
  );
};

export default DesktopImage;
