import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="flex flex-col w-full justify-center items-center">
      <nav className="flex flex-row justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="App_logo" className="w-28 object-contain" />

        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/itx-shoaib")}
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Article Summarization Using
        <br className="max-md:hidden" />
        <span className="orange_gradient ml-2">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Elevate Your Reading Experience with Summize: Transforming Lengthy
        Articles into Clear and Concise Summaries
      </h2>
    </header>
  );
};

export default Hero;
