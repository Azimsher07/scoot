import {
  Hero,
  IconsUsed,
  ImagesUsed,
} from "../../components/pages/HomeComponents";

export const Home = () => {
  return (
    <section className="">
      <Hero />
      <div className=" smPadding sm:mdPadding md:lgPadding lg:xlPadding">
        <IconsUsed />
        <ImagesUsed />
      </div>
    </section>
  );
};
