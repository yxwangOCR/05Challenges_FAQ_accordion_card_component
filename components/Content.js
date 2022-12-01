import Data from "../data.json";
import MobileImage from "./MobileImage";
import DesktopImage from "./DesktopImage";
import Accordion from "./Accordion";
import useWindowDimensions from "../useWindowDimensions";

const Content = () => {
  const { width } = useWindowDimensions();
  return (
    <div>
      <main className='m-0 bg-white w-[330px] min-h-[535px] flex flex-col items-center rounded-3xl md:flex-row md: justify-around md:w-[930px] md:min-h-[500px]'>
        <div>{width < 960 ? <MobileImage /> : <DesktopImage />}</div>
        <div>
          <h1 className='text-darkBlue font-bold text-center text-4xl relative top-[-3.75rem]'>
            FAQ
          </h1>
          <div className='flex flex-col gap-6 relative top-[-2.5rem] w-[80%]'>
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
