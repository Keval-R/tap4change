import { socialAccountIcons } from "utils/helper";

const Footer = () => {
  return (
    <div className="max-h-[375px] bg-[#2C063F] flex flex-row justify-center">
      <div className="mx-[101px] my-[25px]">
        <div className="grid grid-cols-4 gap-4">
          {socialAccountIcons.map((data) => {
            const image = require("assets/social/" + data?.filename);

            return (
              <div key={data?.alt}>
                <img src={image} alt={data?.alt} className="cursor-pointer" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
