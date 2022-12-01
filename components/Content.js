import Data from "../data.json";
import MobileImage from "./MobileImage";
import DesktopImage from "./DesktopImage";
import Accordion from "./Accordion";
import useWindowDimensions from "../useWindowDimensions";

const Content = () => {
  const { width } = useWindowDimensions();
  return (
    <div>
      <main className='m-0 bg-white w-[330px] min-h-[535px] flex flex-col items-center rounded-3xl md:flex-row md:justify-around md:w-[930px] md:min-h-[500px] md:overflow-hidden' >
        <div>{width < 960 ? <MobileImage /> : <DesktopImage />}</div>
        <div className='md:w-[50%] md:flex md:flex-col md:justify-start md:h-[500px]'>
          <h1 className='text-darkBlue font-bold text-center text-4xl relative top-[-5.75rem] md:text-left md:top-[3rem]'>
            FAQ
          </h1>
          <div className='flex flex-col gap-4 relative top-[-2.5rem] md:top-[4rem]'>
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
