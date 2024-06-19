import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const initialText = "Hi, I am Abishek Khadka";
  const replaceText = "a React developer";
  const replaceStart = "Hi, I am ".length; // Position where replacement starts

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth
        initialText={initialText}
        replaceText={replaceText}
        replaceStart={replaceStart}
        duration={3000}
      />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}