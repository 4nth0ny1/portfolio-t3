import Head from "next/head";
import { useState } from "react";

function Navbar() {
  return (
    <div className="flex h-16 flex-row items-center justify-between border-b border-white bg-black text-white">
      <h2>logo</h2>
      <ul className="flex flex-row justify-between gap-6">
        <li>home</li>
        <li>about</li>
        <li>projects</li>
        <li>contact</li>
      </ul>
    </div>
  );
}

function Hero() {
  return (
    <div className="px-20">
      <img
        src="/heroimg.png"
        alt="heroimg.png"
        className="relative h-full w-full"
      />
      <h2 className="absolute bottom-0 w-[40%] pb-8 pl-4 text-[64px] text-white">
        A PORTFOLIO BUILT WITH <span className="text-[#31C58F]">REACT</span>JS
      </h2>
    </div>
  );
}

interface ModalProps {
  title: string;
}

function About() {
  const [open, setOpen] = useState(false);
  const [designData, setDesignData] = useState<ModalProps | any>(null);
  const [developerData, setDeveloperData] = useState<ModalProps | any>([]);

  const handleDesignClick = () => {
    setOpen(!open);
    setDesignData([
      {
        title: "Designer",
        subtitle: "The heart in digital form.",
        description:
          "My philosophy is to expose myself to as many kinds of expression possible. Only then can I expand my potential and create designs that are truly effective.",
      },
    ]);
  };

  const handleDeveloperClick = () => {
    setOpen(!open);
    setDeveloperData([
      {
        title: "Full-Stack Developer",
        subtitle: "The heart in digital form.",
        description:
          "My philosophy is to expose myself to as many kinds of expression possible. Only then can I expand my potential and create designs that are truly effective.",
      },
    ]);
  };

  const handleCloseModal = () => {
    setOpen(!open);
    setDesignData(null);
    setDeveloperData([]);
  };

  return (
    <>
      {open ? (
        <div className="flex h-full flex-row items-center justify-center">
          {designData &&
            designData.map((d) => (
              <div className="h-4/5 w-4/5 bg-[url('/misty.png')] bg-cover bg-center bg-no-repeat">
                <div className="flex flex-row justify-end">
                  <button
                    onClick={handleCloseModal}
                    className="px-8 py-4 text-3xl"
                  >
                    x
                  </button>
                </div>

                <div className="flex flex-col gap-4 py-4 pl-2">
                  <h2 className="text-5xl">{d.title}</h2>
                  <p className="text-2xl italic">{d.subtitle}</p>
                  <p className="w-1/2 text-xl">{d.description}</p>
                </div>
              </div>
            ))}
          {developerData &&
            developerData.map((d) => (
              <div className="h-4/5 w-4/5 bg-white">
                <div className="flex h-full w-full flex-row">
                  <div className="flex w-1/5 flex-col gap-4 py-4 pl-2">
                    <h2 className="whitespace-nowrap text-5xl tracking-widest">
                      Full-Stack
                    </h2>
                    <p className="text-2xl italic">{d.subtitle}</p>
                    <p className="w-1/2 text-xl">{d.description}</p>
                  </div>
                  <div className="relative h-full w-4/5 bg-black">
                    <div className="h-full w-full bg-[url('/paint.png')] bg-cover bg-center bg-no-repeat"></div>
                    <span className="absolute left-0 top-0 px-4 py-4 text-5xl text-white">
                      Developer
                    </span>
                    <button
                      onClick={handleCloseModal}
                      className="absolute right-0 top-0 px-8 py-4 text-3xl text-white"
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="h-full">
          <div className="flex h-1/2 flex-row items-center px-6 text-white">
            <h2 className="pl-20 text-[55px] font-bold text-[#31C58F]">
              ABOUT
            </h2>
          </div>
          <div className="flex h-1/2 flex-row">
            <div
              onClick={handleDesignClick}
              className="flex h-full w-1/2 flex-row border-2 border-black px-32 py-8"
            >
              <div className="flex w-1/2 flex-col justify-between">
                <h2 className="text-[32px] font-bold">DESIGNER</h2>
                <ul className="text-[24px]">
                  <li>FIGMA</li>
                  <li>TAILWIND</li>
                  <li>CSS</li>
                  <li>MATERIAL UI</li>
                </ul>
              </div>
              <div className="flex w-1/2 flex-col justify-center">
                <img src="/designimg.png" alt="designimg.png" className="" />
              </div>
            </div>
            <div
              onClick={handleDeveloperClick}
              className="flex h-full w-1/2 flex-row border-2 border-black px-32 py-8"
            >
              <div className="flex w-1/2 flex-col justify-between">
                <h2 className="text-[32px] font-bold">FULL-STACK DEVELOPER</h2>
                <ul className="text-[24px]">
                  <li>FIGMA</li>
                  <li>TAILWIND</li>
                  <li>CSS</li>
                  <li>MATERIAL UI</li>
                </ul>
              </div>
              <div className="flex w-1/2 flex-col justify-center">
                <img
                  src="/fullstackimg.png"
                  alt="fullstackimg.png"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function AboutTwo() {
  return (
    <div className="h-full px-20">
      <div className="flex h-1/2 flex-col justify-center indent-20">
        <h2 className="w-2/3 text-[72px] font-thin">I EMBRACE MANY</h2>
        <h2 className="w-2/3 text-[72px] font-thin">PERSPECTIVES ON</h2>
        <h2 className="w-2/3 text-[72px] font-thin">DESIGN & DEVELOPMENT</h2>
      </div>
      <div className="flex h-1/2 flex-col justify-center">
        <div className="flex flex-row justify-center gap-40">
          <div className="flex flex-col justify-center text-[34px]">
            <p className="italic">Here are</p>
            <p className="italic">some of my</p>
            <span className="text-[#31C58F]">favorites</span>
          </div>
          <ul className="text-[55px] text-white">
            <li className="font-bold">Minimalism</li>
            <li>Functionality</li>
            <li className="font-thin">Aesthetics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex h-full flex-row py-20">
      <h2 className="w-1/2 pl-20 text-[55px] font-bold text-[#31C58F]">
        PROJECTS
      </h2>
      <div className="flex w-1/2 flex-row flex-wrap">
        <div className="h-1/2 w-1/2 border-2 border-white p-4">
          <h2 className="text-[28px] text-white">FUSION92</h2>
          <img
            src="/nyl.jpg"
            alt="nyl.jpg"
            className="h-[calc(100%-40px)] w-full"
          />
        </div>
        <div className="h-1/2 w-1/2 border-2 border-white p-4">
          <h2 className="text-[28px] text-white">MANAGE-IT</h2>
          <img
            src="/manage.jpg"
            alt="manage.jpg"
            className="h-[calc(100%-40px)] w-full"
          />
        </div>
        <div className="h-1/2 w-1/2 border-2 border-white p-4">
          <h2 className="text-[28px] text-white">REDDIT-CLONE</h2>
          <img
            src="/social.jpg"
            alt="social.jpg"
            className="h-[calc(100%-40px)] w-full"
          />
        </div>
        <div className="h-1/2 w-1/2 border-2 border-white p-4">
          <h2 className="text-[28px] text-white">RAILS CRM</h2>
          <img
            src="crm.jpg"
            alt="crm.jpg"
            className="h-[calc(100%-40px)] w-full"
          />
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex h-full flex-row gap-20 py-20">
      <h2 className="pl-20 text-[55px] font-bold text-[#31C58F]">CONTACT</h2>
      <div className="flex flex-col gap-10 text-white">
        <div>icon</div>
        <div>icon</div>
        <div>icon</div>
      </div>
      <div>
        <img src="/contactimg.png" alt="contactimg.png" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black px-44">
        <Navbar />
      </div>
      <div className="h-[calc(100vh-64px)] bg-gradient-to-b from-[#000] to-[#252525] px-24 py-8">
        <Hero />
      </div>

      <div className="h-screen bg-gradient-to-b from-[#252525] to-[#FFF]">
        <About />
      </div>
      <div className="h-screen bg-gradient-to-b from-[#FFF] to-[#252525]">
        <AboutTwo />
      </div>

      <div className="h-screen bg-[#252525] p-6">
        <Projects />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-[#252525] to-[#000] p-6">
        <Contact />
      </div>
    </>
  );
}
