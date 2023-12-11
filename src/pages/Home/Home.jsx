import { SignIn } from "../../components/common";
import {
  Hero,
  IconsUsed,
  ImagesUsed,
} from "../../components/pages/HomeComponents";

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
