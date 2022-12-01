import Image from "next/image";
import ImageDesktop from "../public/illustration-woman-online-desktop.svg";
import Box from "../public/illustration-box-desktop.svg";

const DesktopImage = () => {
  return (
    <div className='p-0 m-0'>
      <Image
        src={ImageDesktop}
        alt='Desktop-woman-online'
        className='relative right-[6rem] top-0'
      />
      <Image src={Box} alt='box' className='absolute' />
    </div>
  );
};

export default DesktopImage;
