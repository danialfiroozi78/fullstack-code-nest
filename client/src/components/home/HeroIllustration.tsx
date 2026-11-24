import { CircleCheck, Code2, Terminal } from "lucide-react";

export default function HeroIllustration() {
  return (
    <div dir="ltr" className="relative min-w-0">
      <div className="pointer-events-none absolute inset-10 rounded-full bg-primary/15 blur-[100px]" />

      <div className="relative space-y-4">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#202023] shadow-2xl">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-rose-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5">
              <Code2 size={15} className="text-sky-400" />

              <span className="font-mono text-xs text-zinc-400">index.ts</span>
            </div>

            <Terminal size={17} className="text-zinc-500" />
          </div>

          <div className="overflow-x-auto px-5 py-7 font-mono text-[11px] leading-8 sm:text-sm">
            <div className="flex min-w-max gap-5">
              <div className="flex select-none flex-col text-right text-zinc-600">
                {Array.from({ length: 10 }, (_, index) => (
                  <span key={index}>{index + 1}</span>
                ))}
              </div>

              <div className="whitespace-pre">
                <div className="text-zinc-500">{"// Welcome to CodeNest"}</div>

                <div>
                  <span className="text-violet-400">const </span>
                  <span className="text-sky-300">journey </span>
                  <span className="text-zinc-300">{"= {"}</span>
                </div>

                <div>
                  {"  "}
                  <span className="text-sky-300">learn</span>
                  <span className="text-zinc-300">: </span>
                  <span className="text-emerald-300">{'"Programming"'}</span>
                  <span className="text-zinc-300">,</span>
                </div>

                <div>
                  {"  "}
                  <span className="text-sky-300">practice</span>
                  <span className="text-zinc-300">: </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-zinc-300">,</span>
                </div>

                <div>
                  {"  "}
                  <span className="text-sky-300">build</span>
                  <span className="text-zinc-300">: </span>
                  <span className="text-emerald-300">{'"Real Projects"'}</span>
                </div>

                <div className="text-zinc-300">{"};"}</div>

                <div>&nbsp;</div>

                <div>
                  <span className="text-violet-400">const </span>
                  <span className="text-sky-300">future </span>
                  <span className="text-zinc-300">= </span>
                  <span className="text-violet-400">await </span>
                </div>

                <div>
                  {"  "}
                  <span className="text-sky-300">CodeNest</span>
                  <span className="text-zinc-300">.</span>
                  <span className="text-rose-300">start</span>
                  <span className="text-zinc-300">(journey);</span>
                </div>

                <div>
                  <span className="text-zinc-500">
                    {"// Your future starts here."}
                  </span>

                  <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-rose-400 align-middle" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-black/15 px-5 py-4">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
              <Terminal size={14} />
              Terminal
            </div>

            <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-emerald-400">
              <CircleCheck size={15} className="shrink-0" />
              Ready to start your journey.
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 pt-3">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>

          <span className="font-mono text-[11px] text-zinc-400">
            Your next chapter starts here.
          </span>
        </div>
      </div>
    </div>
  );
}
