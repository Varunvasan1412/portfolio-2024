"use client";
import React from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/CanvasRevealEffect";
import AnimatedText from "@/components/AnimatedText";

const approach = () => {
  return (
    <>
      <Head>
        <title>Varun | My Approach</title>
        <meta name="description" content="any description" />
      </Head>
      <AnimatedText text="Strategize for success." className="mb-16 pt-16" />
      <section className="w-full py-20">
        <div className="my-20 flex flex-col minlg:flex-row items-center justify-center w-full gap-4">
          <Card
            title="Planning & Strategy"
            icon={<AceternityIcon />}
            description="I'll collaborate to map out your website's goals, target audience, and key functionalities. I'll discuss things like site structure, navigation and content requirements."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
              colors={[
                [0, 72, 153],
                [232, 255, 0],
              ]}
              dotSize={2.5}
            />
          </Card>
          <Card
            title="Development & Progress Update"
            icon={<AceternityIcon />}
            description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
              colors={[
                [150, 0, 153],
                [232, 121, 249],
              ]}
              dotSize={2.5}
            />
          </Card>
          <Card
            title="Development & Launch"
            icon={<AceternityIcon />}
            description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
              colors={[[125, 211, 254]]}
              dotSize={2.5}
            />
          </Card>
        </div>
      </section>
    </>
  );
};

const Card = ({ title, icon, children, description }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative minlg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-3xl text-center">
          {title}
        </h2>
        <h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center style = {{color: '#e4ecff">
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <div>
      <button className="relative inline-flex minlg:h-14 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-[8px] focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-3  text-white backdrop-blur-3xl text-sm minlg:text-lg font-bold">
          Hover Me !
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default approach;
