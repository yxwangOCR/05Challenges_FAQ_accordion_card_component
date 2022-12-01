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
  };
  const backgroundDesktop = {
    backgroundImage: `url(${bgDesktop.src})`,
  };
  return (
    <div
      style={width < 960 ? backgroundMobile : backgroundDesktop}
      className='bg-white bg-no-repeat rounded-3xl bg-top min-h-[535px]'>
      <main className='m-0 w-[330px] min-h-[535px] flex flex-col items-center  md:flex-row md:justify-around md:w-[930px] md:min-h-[500px] md:overflow-hidden'>
        <div>{width < 960 ? <MobileImage /> : <DesktopImage />}</div>
        <div className='md:w-[50%] md:flex md:flex-col md:justify-start md:h-[500px]'>
          <h1 className='text-darkBlue font-bold text-center text-4xl relative top-[-2.75rem] md:text-left md:top-[3rem]'>
            FAQ
          </h1>
          <div className='flex flex-col gap-4 relative top-[-1.5rem] mb-[2.5rem] md:top-[4rem]'>
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
    </div>
  );
};

export default Content;
