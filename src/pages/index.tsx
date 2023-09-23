import Head from "next/head";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <motion.img
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
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

interface DesDevProps {
  title: string;
  subtitle: string;
  description: string;
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
            designData.map((d: DesDevProps) => (
              <motion.div
                initial={{ scale: 0.5, x: -1000, opacity: 0 }}
                animate={{ scale: 1, x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className="h-4/5 w-4/5 bg-[url('/misty.png')] bg-cover bg-center bg-no-repeat"
                key={d.title}
              >
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
              </motion.div>
            ))}
          {developerData &&
            developerData.map((d: DesDevProps) => (
              <motion.div
                initial={{ scale: 0.5, x: 1000, opacity: 0 }}
                animate={{ scale: 1, x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className="h-4/5 w-4/5 bg-white"
                key={d.title}
              >
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
              </motion.div>
            ))}
        </div>
      ) : (
        <div className="h-full">
          <div className="flex h-1/2  flex-row items-center px-6 text-white">
            <h2 className="pl-20 text-[55px] font-bold text-[#31C58F]">
              ABOUT
            </h2>
          </div>
          <div className="flex h-1/2 flex-row">
            <div
              onClick={handleDesignClick}
              className="flex h-full w-1/2 cursor-pointer flex-row border-2 border-black px-32 py-8 hover:bg-[#31C58F]"
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
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src="/designimg.png"
                  alt="designimg.png"
                  transition={{ type: "spring", ease: "easeOut", duration: 1 }}
                />
              </div>
            </div>
            <div
              onClick={handleDeveloperClick}
              className="flex h-full w-1/2 cursor-pointer flex-row border-2 border-black px-32 py-8 hover:bg-[#31C58F]"
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
                <motion.img
                  src="/fullstackimg.png"
                  alt="fullstackimg.png"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", ease: "easeOut", duration: 1 }}
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
        <div className="flex flex-row justify-end gap-40 pr-40">
          <div className="flex flex-col justify-center text-[34px]">
            <p className="italic">Here are</p>
            <p className="italic">some of my</p>
            <span className="text-[#31C58F]">favorites</span>
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[55px] text-white"
          >
            <motion.li
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", ease: "easeOut", duration: 1 }}
              className="font-bold"
            >
              Minimalism
            </motion.li>
            <motion.li
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", ease: "easeOut", duration: 1.5 }}
              className="font-bold"
            >
              Functionality{" "}
            </motion.li>
            <motion.li
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", ease: "easeOut", duration: 2 }}
              className="font-thin"
            >
              Aesthetics
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex h-full flex-row pt-20">
      <h2 className="w-1/3 pl-20 text-[55px] font-bold text-[#31C58F]">
        PROJECTS
      </h2>
      <div className="flex w-2/3 flex-row flex-wrap">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", ease: "easeOut", duration: 2 }}
          className="h-1/2 w-1/2 border-2 border-white p-4 hover:bg-[#31C58F] "
        >
          <Link href="/fusion92">
            <h2 className="cursor-pointer text-[28px] text-white hover:font-bold hover:text-black">
              FUSION92
            </h2>
            <img
              src="/nyl.jpg"
              alt="nyl.jpg"
              className="h-[calc(100%-40px)] w-full"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", ease: "easeOut", duration: 3 }}
          className="h-1/2 w-1/2 border-2 border-white p-4 hover:bg-[#31C58F] "
        >
          <Link href="/manageit">
            <h2 className="cursor-pointer text-[28px] text-white hover:font-bold hover:text-black">
              MANAGE-IT
            </h2>

            <img
              src="/manage.jpg"
              alt="manage.jpg"
              className="h-[calc(100%-40px)] w-full"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", ease: "easeOut", duration: 4 }}
          className="h-1/2 w-1/2 border-2 border-white p-4 hover:bg-[#31C58F] "
        >
          <Link href="/reddit">
            <h2 className="cursor-pointer text-[28px] text-white hover:font-bold hover:text-black">
              REDDIT-CLONE
            </h2>

            <img
              src="/social.jpg"
              alt="social.jpg"
              className="h-[calc(100%-40px)] w-full"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ scale: 0.25, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", ease: "easeOut", duration: 5 }}
          className="h-1/2 w-1/2 border-2 border-white p-4 hover:bg-[#31C58F]"
        >
          <Link href="/rails">
            <h2 className="cursor-pointer text-[28px] text-white hover:font-bold hover:text-black">
              RAILS CRM
            </h2>
            <img
              src="crm.jpg"
              alt="crm.jpg"
              className="h-[calc(100%-40px)] w-full"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex h-full flex-row gap-20 py-20">
      <h2 className="pl-20 text-[55px] font-bold text-[#31C58F]">CONTACT</h2>

      <div className="relative">
        <img src="/contactimg.png" alt="contactimg.png" />
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", ease: "easeOut", duration: 3 }}
          className="absolute bottom-1/2 flex w-full justify-center gap-20"
        >
          <Link href="mailto:acatullo4@gmail.com">
            <HiOutlineMail className="cursor-pointer text-5xl hover:text-[#31c58f]" />
          </Link>

          <Link href="https://github.com/4nth0ny1">
            <FiGithub className="cursor-pointer text-5xl hover:text-[#31c58f]" />
          </Link>
        </motion.div>
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

      <div className="mt-40 h-screen bg-gradient-to-b from-[#FFF] to-[#252525] pb-20">
        <AboutTwo />
      </div>

      <div className="h-screen bg-gradient-to-b from-[#252525] to-[#252525] p-6">
        <Projects />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-[#252525] to-[#000] p-6 pt-44">
        <Contact />
      </div>
    </>
  );
}
