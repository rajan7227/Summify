import React from "react";
import LinkIcon from "../../assets/link.svg";
import { useState } from "react";
const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async(e) => {
    if(article.url === "") {
      alert("Please enter a URL");
      return;}
    alert("Summarizing Article");
  }

  return (
    <section className="mt-6 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2 ">
        <form
          action="submit"
          className="relative flex justify-center items-center "
        >
          <img
            src={LinkIcon}
            alt=""
            className="absolute  left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            required
            placeholder="Paste a URL"
            value={article.url}
            onChange={(e) => setArticle({...article, url: e.target.value })}
            className="url_input peer"
          />
          <button onClick={handleSubmit} className=" submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
          
            <p>↵</p>
          </button>
        </form>
        {/* Browse URL  */}
      </div>
      {/* Display Results */}
    </section>
  );
};
export default Demo;
 