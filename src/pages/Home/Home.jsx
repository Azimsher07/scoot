import {
  Hero,
  IconsUsed,
  ImagesUsed,
  SignIn,
} from "../../components/pages/HomeComponents";

export const Home = () => {
  return (
    <section className="">
      <Hero />
      <div className="px-[32px]">
        <IconsUsed />
        <ImagesUsed />
      </div>
      <SignIn />
    </section>
  );
};
