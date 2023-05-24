import { BsFire, BsGithub } from "react-icons/bs";

export default function Hero() {
  function openGithubLinkHandler() {
    window.open("https://github.com/sanketghosh");
  }

  return (
    <header className="w-full flex justify-center items-center flex-col select-none">
      <nav className="flex justify-between items-center w-full mb-10 pt-4">
        <div className="flex items-center gap-1 cursor-pointer">
          <BsFire className="text-[1.65rem] text-orange-600" />
          <h1 className="font-raleway text-[1.70rem] font-extrabold">
            summwiz
          </h1>
        </div>

        <button
          className="black_btn"
          onClick={openGithubLinkHandler}
          type="button"
        >
          <BsGithub />
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Discover the Essence,
        <br className="max-md:hidden" />
        <span className="orange_gradient">Skip the Verbose!</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with summwiz.ai, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
}
