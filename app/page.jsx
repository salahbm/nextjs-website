import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center ">
        Disvover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        LocumTenens.com specializes in recruiting physicians and advanced
        practitioners to work temporary and temp-to-perm assignments at
        healthcare organizations across the U.S. We offer both onsite and
        virtual approaches to mitigating physician shortages.
      </p>
      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
