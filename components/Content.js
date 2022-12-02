import Data from "../data.json";
import MobileImage from "./MobileImage";
import DesktopImage from "./DesktopImage";
import Accordion from "./Accordion";
import useWindowDimensions from "../useWindowDimensions";
import bgMobile from "../public/bg-pattern-mobile.svg";
import bgDesktop from "../public/bg-pattern-desktop.svg";

const Content = () => {
  const { width } = useWindowDimensions();
  const backgroundMobile = {
    backgroundImage: `url(${bgMobile.src})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };
  const backgroundDesktop = {
    backgroundImage: `url(${bgDesktop.src})`,
    backgroundPosition: "left -7rem top 9rem",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "39vh",
  };
  return (
    <main className='bg-white rounded-3xl min-h-[535px] flex m-0 w-[330px] flex-col items-center md:flex-row md:justify-around md:w-[930px] md:min-h-[500px]'>
      <div
        className='md:w-[50%] relative'
        style={width < 960 ? backgroundMobile : backgroundDesktop}>
        {width < 960 ? <MobileImage /> : <DesktopImage />}
      </div>

      <div className='md:w-[50%] md:min-h-[535px]'>
        <h1 className='text-darkBlue font-bold text-center text-4xl relative top-[-2.75rem] md:text-left md:top-[5rem]'>
          FAQ
        </h1>
        <div className='flex flex-col gap-4 relative top-[-1.5rem] mb-[2.5rem] md:top-[6rem] md:mb-0'>
          {Data.map((item) => (
            <Accordion
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Content;
/*

<div
          style={width < 960 ? backgroundMobile : backgroundDesktop}
          className='bg-no-repeat md:w-[50%]'></div>

<div
      style={width < 960 ? backgroundMobile : backgroundDesktop}
      className='bg-white bg-no-repeat rounded-3xl min-h-[535px] flex'>
      </div>

      <main className='m-0 w-[330px] min-h-[535px] rounded-3xl flex flex-col items-center md:flex-row md:justify-around md:w-[930px] md:min-h-[500px]'>
*/
