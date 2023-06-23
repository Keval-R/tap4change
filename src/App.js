import { tagJson } from "utils/helper";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "components/Layout/Footer";
import posterImg from "assets/image/people.svg";
import handImg from "assets/image/hand.svg";
import { TagIcon } from "@heroicons/react/24/outline";

const Tags = () => {
  return (
    <div className="flex flex-col justify-center font-poppins text-deepPurple mb-[23px] mt-[12px]">
      <div className="flex justify-center">
        <span className="tracking-wide font-bold text-xl leading-6 ">
          Select up to
          <span className="higlight-causes relative" />
        </span>
      </div>
      <div className="flex justify-center mt-3.5">
        <span className="w-[293px] text-center text-xs">
          (Next you’ll be able to add tags such as ‘Ocean’, ‘Mental health’,
          ‘Feminism’ etc)
        </span>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4 mt-6 max-w-[308px]">
          {tagJson.map((data, index) => {
            const image = require(`assets/app/${data?.url}`);
            return (
              <div key={index}>
                <div className="flex justify-center">
                  <img
                    src={image}
                    alt="img"
                    className="max-h-10 text-center max-w-10 cursor-pointer"
                  />
                </div>
                <div className="flex justify-center flex-center cursor-pointer">
                  <span className="font-poppins font-bold text-xs text-center mt-[12px] ">
                    {data?.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-[38px] mb-[39px]">
        <button className="font-black rounded-full border w-[169px]  border-lightPurple h-[41px]  text-lightPurple bg-lightYallow active:text-deepPurple active:border-[1px] active:bg-yallow active:shadow-charitiesBtn">
          <p className="tracking-[0.08em] uppercase">see charities</p>
        </button>
      </div>
    </div>
  );
};

const Poster = () => {
  return (
    <div className="flex flex-row justify-center mt-[14px] mb-[54px]">
      <div className="bg-[#FF826A] max-h-[684px] max-w-[327px] w-full rounded-lg ">
        <div className="text-center font-PermanentMarker font-normal text-[40px] leading-[49px] mt-[80px] text-deepPurple">
          what do
          <br />
          <span className="text-center font-PermanentMarker font-normal leading-[99px]  text-[80px] text-yallow">
            YOUs
          </span>
          <br />
          stand for?
        </div>

        <div className="flex flex-row justify-center text-center  font-poppins font-bold text-base mt-[24px] mb-[24px]">
          <p className="tracking-[0.32px] max-w-[295px] ">
            Join the community to discover, support, & promote projects that you
            care about.
          </p>
        </div>
        <div className="flex flex-col justify-center text-center ">
          <div className="flex justify-center">
            <img
              src={posterImg}
              alt="poster"
              className="max-w-[181px] w-full h-full max-h-[91px] text "
            />
          </div>

          <div className="flex justify-center mt-[32px] mb-[33px]">
            <button className="font-poppins text-center items-center text-base flex flex-row justify-evenly font-black rounded-full  w-[233px] h-[40px] border-lightPurple   text-deepPurple border-[1px] bg-yallow shadow-charitiesBtn">
              <TagIcon className="block h-[24px] w-[24px]" aria-hidden="true" />
              <p className="tracking-[0.08em] uppercase">pick my causes !</p>
            </button>
          </div>

          <div className="flex justify-center mb-[20px]">
            <img
              src={handImg}
              alt="select"
              className="max-w-[37px] max-h-[68px] w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className=" lg:bg-black">
      <div className="flex lg:justify-center">
        <div className="max-w-[375px] bg-white">
          <Header />
          <Poster />
          <Tags />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
