import Team from "../components/Team";

const About = () => {
  return (
    <>
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            libero ac nisl aliquam, eu eleifend dolor facilisis. Sed ullamcorper
            quam eget massa fermentum, a convallis urna tempus.
          </p>
          <p className="text-lg">
            Curabitur auctor ex id nibh faucibus, eu ultrices lorem porttitor.
            Vivamus non mi id elit scelerisque tincidunt. Sed at augue eget
            ligula accumsan pharetra.
          </p>
        </div>
      </section>
      <Team />
    </>
  );
};

export default About;
