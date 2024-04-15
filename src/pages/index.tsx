import { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

import { TracingBeams } from "@/components/ui/tracing-beams";
import { Count } from "@/components/utils/Count/Count";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "reablocks",
  description:
    "50+ Components for ReactJS based on TailwindCSS and Framer Motion",
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-[#11111F] from-50% to-[#121212] ${inter.className} antiasliased overflow-x-hidden`}
    >
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 z-50 flex w-full justify-center border-b border-[#9091A0] border-opacity-[16%] backdrop-blur-md`}
      >
        <nav
          className="relative flex w-full max-w-[1440px] items-center justify-center px-2 py-6 sm:px-2"
          aria-label="Global"
        >
          <div className="absolute left-4 flex-1 md:left-24">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <Image src="/logo.svg" alt="logo" width={122} height={24} />
            </a>
          </div>
          <div className="absolute right-4 flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-content-secondary"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:gap-x-4 lg:gap-x-12">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-content-secondary"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-content-secondary"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-content-secondary"
            >
              Blocks
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-content-secondary"
            >
              Support
            </a>
          </div>
        </nav>
      </motion.header>
      <TracingBeams className="hidden md:block">
        <section className={`container mt-32 flex-1 px-4 md:px-24`}>
          <div className="flex flex-col items-center gap-4 py-12 md:flex-row">
            <div className="relative flex flex-1 flex-col gap-4">
              <div className="absolute -top-10 flex w-fit items-center gap-2 rounded-full border border-[#0D4ED2] bg-[#041028] px-3 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M6 12.5L5.51924 12.6374C5.58057 12.852 5.77676 13 6 13C6.22324 13 6.41943 12.852 6.48076 12.6374L6 12.5ZM6.54213 10.6025L7.02289 10.7399L6.54213 10.6025ZM8.60254 8.54213L8.46518 8.06137L8.60254 8.54213ZM10.5 8L10.6374 8.48076C10.852 8.41943 11 8.22324 11 8C11 7.77676 10.852 7.58057 10.6374 7.51924L10.5 8ZM8.60254 7.45787L8.7399 6.97711L8.60254 7.45787ZM6.54213 5.39746L6.06137 5.53482L6.54213 5.39746ZM6 3.5L6.48076 3.36264C6.41943 3.14799 6.22324 3 6 3C5.77676 3 5.58057 3.14799 5.51924 3.36264L6 3.5ZM5.45787 5.39746L4.97711 5.2601L5.45787 5.39746ZM3.39746 7.45787L3.53482 7.93863H3.53482L3.39746 7.45787ZM1.5 8L1.36264 7.51924C1.14799 7.58057 1 7.77676 1 8C1 8.22324 1.14799 8.41943 1.36264 8.48076L1.5 8ZM3.39746 8.54213L3.2601 9.02289L3.39746 8.54213ZM5.45787 10.6025L5.93863 10.4652L5.45787 10.6025ZM12 6.5L11.5149 6.62127C11.5706 6.84385 11.7706 7 12 7C12.2294 7 12.4294 6.84385 12.4851 6.62127L12 6.5ZM12.1726 5.80969L11.6875 5.68842L12.1726 5.80969ZM14.5 4L14.6213 4.48507C14.8439 4.42943 15 4.22943 15 4C15 3.77057 14.8439 3.57057 14.6213 3.51493L14.5 4ZM12 1.5L12.4851 1.37873C12.4294 1.15615 12.2294 1 12 1C11.7706 1 11.5706 1.15615 11.5149 1.37873L12 1.5ZM11.8274 2.19031L12.3125 2.31158V2.31158L11.8274 2.19031ZM9.5 4L9.37873 3.51493C9.15615 3.57057 9 3.77057 9 4C9 4.22943 9.15615 4.42943 9.37873 4.48507L9.5 4ZM11 14.5L10.5257 14.6581C10.5937 14.8623 10.7848 15 11 15C11.2152 15 11.4063 14.8623 11.4743 14.6581L11 14.5ZM11.2628 13.7115L10.7885 13.5534L11.2628 13.7115ZM12.2115 12.7628L12.0534 12.2885L12.2115 12.7628ZM13 12.5L13.1581 12.9743C13.3623 12.9063 13.5 12.7152 13.5 12.5C13.5 12.2848 13.3623 12.0937 13.1581 12.0257L13 12.5ZM12.2115 12.2372L12.0534 12.7115L12.2115 12.2372ZM11.2628 11.2885L10.7885 11.4466L11.2628 11.2885ZM11 10.5L11.4743 10.3419C11.4063 10.1377 11.2152 10 11 10C10.7848 10 10.5937 10.1377 10.5257 10.3419L11 10.5ZM10.7372 11.2885L11.2115 11.4466L10.7372 11.2885ZM9.78849 12.2372L9.9466 12.7115L9.78849 12.2372ZM9 12.5L8.84189 12.0257C8.63772 12.0937 8.5 12.2848 8.5 12.5C8.5 12.7152 8.63772 12.9063 8.84189 12.9743L9 12.5ZM9.78849 12.7628L9.9466 12.2885L9.78849 12.7628ZM10.7372 13.7115L11.2115 13.5534L10.7372 13.7115ZM6.48076 12.6374L7.02289 10.7399L6.06137 10.4652L5.51924 12.3626L6.48076 12.6374ZM8.7399 9.02289L10.6374 8.48076L10.3626 7.51924L8.46518 8.06137L8.7399 9.02289ZM10.6374 7.51924L8.7399 6.97711L8.46518 7.93863L10.3626 8.48076L10.6374 7.51924ZM7.02289 5.2601L6.48076 3.36264L5.51924 3.63736L6.06137 5.53482L7.02289 5.2601ZM5.51924 3.36264L4.97711 5.2601L5.93863 5.53482L6.48076 3.63736L5.51924 3.36264ZM3.2601 6.97711L1.36264 7.51924L1.63736 8.48076L3.53482 7.93863L3.2601 6.97711ZM1.36264 8.48076L3.2601 9.02289L3.53482 8.06137L1.63736 7.51924L1.36264 8.48076ZM4.97711 10.7399L5.51924 12.6374L6.48076 12.3626L5.93863 10.4652L4.97711 10.7399ZM3.2601 9.02289C4.09062 9.26018 4.73982 9.90938 4.97711 10.7399L5.93863 10.4652C5.60642 9.30245 4.69755 8.39358 3.53482 8.06137L3.2601 9.02289ZM4.97711 5.2601C4.73982 6.09062 4.09062 6.73982 3.2601 6.97711L3.53482 7.93863C4.69755 7.60642 5.60642 6.69755 5.93863 5.53482L4.97711 5.2601ZM8.7399 6.97711C7.90938 6.73982 7.26018 6.09062 7.02289 5.2601L6.06137 5.53482C6.39358 6.69755 7.30245 7.60642 8.46518 7.93863L8.7399 6.97711ZM7.02289 10.7399C7.26018 9.90938 7.90938 9.26018 8.7399 9.02289L8.46518 8.06137C7.30245 8.39358 6.39358 9.30245 6.06137 10.4652L7.02289 10.7399ZM12.4851 6.62127L12.6576 5.93096L11.6875 5.68842L11.5149 6.37873L12.4851 6.62127ZM13.931 4.65765L14.6213 4.48507L14.3787 3.51493L13.6884 3.68751L13.931 4.65765ZM14.6213 3.51493L13.931 3.34235L13.6884 4.31249L14.3787 4.48507L14.6213 3.51493ZM12.6576 2.06904L12.4851 1.37873L11.5149 1.62127L11.6875 2.31158L12.6576 2.06904ZM11.5149 1.37873L11.3424 2.06904L12.3125 2.31158L12.4851 1.62127L11.5149 1.37873ZM10.069 3.34235L9.37873 3.51493L9.62127 4.48507L10.3116 4.31249L10.069 3.34235ZM9.37873 4.48507L10.069 4.65765L10.3116 3.68751L9.62127 3.51493L9.37873 4.48507ZM11.3424 5.93096L11.5149 6.62127L12.4851 6.37873L12.3125 5.68842L11.3424 5.93096ZM10.069 4.65765C10.696 4.8144 11.1856 5.30396 11.3424 5.93096L12.3125 5.68842C12.0662 4.70314 11.2969 3.93383 10.3116 3.68751L10.069 4.65765ZM11.3424 2.06904C11.1856 2.69604 10.696 3.1856 10.069 3.34235L10.3116 4.31249C11.2969 4.06617 12.0662 3.29686 12.3125 2.31158L11.3424 2.06904ZM13.931 3.34235C13.304 3.1856 12.8144 2.69604 12.6576 2.06904L11.6875 2.31158C11.9338 3.29686 12.7031 4.06617 13.6884 4.31249L13.931 3.34235ZM12.6576 5.93096C12.8144 5.30396 13.304 4.8144 13.931 4.65765L13.6884 3.68751C12.7031 3.93383 11.9338 4.70314 11.6875 5.68842L12.6576 5.93096ZM11.4743 14.6581L11.7372 13.8696L10.7885 13.5534L10.5257 14.3419L11.4743 14.6581ZM12.3696 13.2372L13.1581 12.9743L12.8419 12.0257L12.0534 12.2885L12.3696 13.2372ZM13.1581 12.0257L12.3696 11.7628L12.0534 12.7115L12.8419 12.9743L13.1581 12.0257ZM11.7372 11.1304L11.4743 10.3419L10.5257 10.6581L10.7885 11.4466L11.7372 11.1304ZM10.5257 10.3419L10.2628 11.1304L11.2115 11.4466L11.4743 10.6581L10.5257 10.3419ZM9.63037 11.7628L8.84189 12.0257L9.15811 12.9743L9.9466 12.7115L9.63037 11.7628ZM8.84189 12.9743L9.63037 13.2372L9.9466 12.2885L9.15811 12.0257L8.84189 12.9743ZM10.2628 13.8696L10.5257 14.6581L11.4743 14.3419L11.2115 13.5534L10.2628 13.8696ZM9.63037 13.2372C9.92898 13.3367 10.1633 13.571 10.2628 13.8696L11.2115 13.5534C11.0124 12.9562 10.5438 12.4876 9.9466 12.2885L9.63037 13.2372ZM10.2628 11.1304C10.1633 11.429 9.92898 11.6633 9.63037 11.7628L9.9466 12.7115C10.5438 12.5124 11.0124 12.0438 11.2115 11.4466L10.2628 11.1304ZM12.3696 11.7628C12.071 11.6633 11.8367 11.429 11.7372 11.1304L10.7885 11.4466C10.9876 12.0438 11.4562 12.5124 12.0534 12.7115L12.3696 11.7628ZM11.7372 13.8696C11.8367 13.571 12.071 13.3367 12.3696 13.2372L12.0534 12.2885C11.4562 12.4876 10.9876 12.9562 10.7885 13.5534L11.7372 13.8696Z" />
                </svg>
                <span className="text-xs">Reablocks 1.0</span>
              </div>
              <h1 className="text-[40px] font-bold text-content-primary md:text-6xl">
                Blocks you never knew you needed.
              </h1>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-xs text-content-secondary md:text-base">
                Explore 5900+ blocks, unique widgets, and others with a
                lightning-fast for React based on Tailwind.
              </p>
              <div className="flex gap-4">
                <button className="w-1/2 min-w-[125px] rounded-md border border-primary bg-transparent px-4 py-2 font-semibold text-content-primary shadow-button md:w-fit">
                  Get Started
                </button>
                <button className="w-1/2 min-w-[125px] rounded-md bg-primary px-4 py-2 font-semibold text-content-primary shadow-button hover:bg-primary-hover md:w-fit">
                  Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        <hr className="absolute left-0 hidden w-full border border-[#9091A0] border-opacity-[16%] md:block" />
        <section className="flex w-full justify-center px-0 py-4 md:px-24 md:py-10">
          <div className="grid w-full grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1">
            <div className="flex flex-1 flex-col items-center gap-4 border-r border-[#9091A0] border-opacity-[16%] px-12">
              <Count
                className="min-h-9 text-3xl font-bold"
                from={120}
                to={200}
                suffix={"+"}
              />
              <h3 className="text-sm">Blocks</h3>
            </div>
            <div className="flex flex-1 flex-col items-center gap-4 border-r border-[#9091A0] border-opacity-[16%] px-12">
              <Count
                className="min-h-9 text-3xl font-bold"
                from={120}
                to={200}
                suffix={"+"}
              />

              <h3 className="text-sm">Blocks</h3>
            </div>
            <div className="flex flex-1 flex-col items-center gap-4 border-r border-[#9091A0] border-opacity-[16%] px-12">
              <Count
                className="min-h-9 text-3xl font-bold"
                from={120}
                to={200}
                suffix={"+"}
              />

              <h3 className="text-sm">Blocks</h3>
            </div>
            <div className="flex flex-1 flex-col items-center gap-4 px-12">
              <Count
                className="min-h-9 text-3xl font-bold"
                from={120}
                to={200}
                suffix={"+"}
              />

              <h3 className="text-sm">Blocks</h3>
            </div>
          </div>
        </section>
        <hr className="absolute left-0 hidden w-full border border-[#9091A0] border-opacity-[16%] md:block" />
        <section className="h-[500px] w-full" />
        <section className="h-[500px] w-full" />
        <section className="h-[500px] w-full" />
      </TracingBeams>
    </main>
  );
}
