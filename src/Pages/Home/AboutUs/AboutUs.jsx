import img1 from "../../../assets/piggybank-B0XpYheGekk-unsplash.jpg";
import img2 from "../../../assets/austin-distel-DfjJMVhwH_8-unsplash.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <section>
        <SectionTitle heading={'About US'} subheading={'We prioritize our clients  '}>

        </SectionTitle>
      <div className="mb-16">
        
          <div className="diff aspect-[16/9]">
            <div className="diff-item-1 ">
              <img alt="daisy" src={img1} />
              <div className="flex flex-col items-center justify-center p-8 bg-black  opacity-50">
                <h1 className="text-5xl font-bold text-white mb-6">
                  About RUBICON
                </h1>
                <p className="text-left text-white mb-4">
                  Welcome to RUBICON, a trusted leader in asset management{" "}
                  <br />
                  solutions. Established with a vision to empower individuals
                  and <br />
                  businesses to optimize their investments and achieve financial{" "}
                  <br />
                  success, we pride ourselves on delivering expert guidance and{" "}
                  <br />
                  innovative strategies tailored to meet our clients diverse{" "}
                  <br />
                  needs.
                </p>
              </div>
            </div>
            <div className="diff-item-2">
              <img alt="daisy" src={img2} />
              <div className="flex items-center justify-center flex-col  bg-black  opacity-70 p-8">
                <h1 className="text-4xl font-bold text-white mb-8">
                  Our Mission
                </h1>
                <h1 className="text-xl text-left text-white">Expertise:</h1>
                <p className="text-left text-white mb-4">
                  Our team comprises seasoned professionals with extensive <br />
                  experience in the financial industry, equipped to navigate <br />
                  through various market conditions and deliver comprehensive <br />
                  solutions.
                </p>
                <h1 className="text-xl text-left text-white">
                  Tailored Solutions:
                </h1>
                <p className="text-left text-white mb-4">
                  We understand that every client is unique. Hence, we offer{" "}
                  <br />
                  personalized strategies and investment plans aligned with{" "}
                  <br />
                  individual goals and risk tolerance.
                </p>
                <h1 className="text-xl text-left text-white">Innovation:</h1>
                <p className="text-left text-white">
                  Embracing technological advancements, we employ tools and <br />
                  methodologies to analyze market trends, enabling us to make <br />
                  informed decisions and adapt swiftly to changing landscapes. <br />
                </p>
              </div>
            </div>
            <div className="diff-resizer"></div>
          </div>
        </div>
     
    </section>
  );
};

export default AboutUs;
