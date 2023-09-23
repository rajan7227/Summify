import React, { useEffect } from "react";
import LinkIcon from "../../assets/link.svg";
import { useState } from "react";
import { useLazyGetSummaryQuery } from "../../services/article";
const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles ] = useState ([]);

  const [getSummary, { error, isFetching}] = useLazyGetSummaryQuery();

  useEffect(()=>{
      const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))

      if(articlesFromLocalStorage){
        setAllArticles(articlesFromLocalStorage)
      }
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { data } = await getSummary({articleUrl: article.url})

    if (data?.summary){
      const newArticle = {...article, summary:data.summary}
      const updatedAllArticle = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticle);

      localStorage.setItem('article ',JSON.stringify(updatedAllArticle))

    }
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
 