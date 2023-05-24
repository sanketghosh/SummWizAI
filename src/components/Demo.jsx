import { useState, useEffect } from "react";

import { MdLink } from "react-icons/md";
import { AiOutlineEnter } from "react-icons/ai";

export default function Demo() {
  const [article, setArticle] = useState({
    url: " ",
    summary: " ",
  });

  const handleSubmit = async (e) => {
    alert("submitted");
  };

  const urlValueChangeHandler = (e) => {
    setArticle({ ...article, url: e.target.value });
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* search bar  */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <MdLink className="absolute left-0 my-2 ml-5 text-2xl text-gray-400" />
          <input
            type="url"
            placeholder="Enter your link here"
            value={article.url}
            onChange={urlValueChangeHandler}
            required
            className="url_input peer-focus:border-gray-700 peer-focus:text-gray-700 ml-2"
          />

          <button type="submit" className="submit_btn">
            <AiOutlineEnter />
          </button>
        </form>

        {/* browse url history */}

        {/* display result */}
      </div>
    </section>
  );
}
