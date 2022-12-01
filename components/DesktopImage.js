import Image from "next/image";
import ImageDesktop from "../public/illustration-woman-online-desktop.svg";
import Box from "../public/illustration-box-desktop.svg";

const DesktopImage = () => {
  return (
    <div>
      <Image src={ImageDesktop} alt='Desktop-woman-online' />
      <Image src={Box} alt='box' />
    </div>
  );
};

export default DesktopImage;
