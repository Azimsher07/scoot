import {
  Hero,
  IconsUsed,
  ImagesUsed,
} from "../../components/pages/HomeComponents";
// import { IconsUsed } from "../../components/pages/HomeComponents/iconsUsed";

export const Home = () => {
  return (
    <section className="">
      <Hero />
      <div className="px-[32px]">
        <IconsUsed />
        <ImagesUsed />
      </div>
    </section>
  );
};
