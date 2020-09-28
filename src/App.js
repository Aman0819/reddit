import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import CardGrid from "./components/CardGrid";
import ImageGrid from "./components/ImageGrid";

const url = "https://www.reddit.com/r/";
const corsproxy = "https://cors-anywhere.herokuapp.com/";

function App() {
  const [reddit, setReddit] = useState({
    currentSubreddit: "",
    files: [],
    after: null,
    before: null,
    page: 1,
  });

  async function searchSubreddit(subreddit) {
    const response = await axios.get(
      `${corsproxy}${url}${subreddit}.json?raw_json=1`
    );
    setReddit({
      ...reddit,
      currentSubreddit: subreddit,
      files: response.data.data.children,
      after: response.data.data.after,
      page: 1,
    });
  }
  // useEffect(() => {
  //   reddit.files.forEach((element) => {
  //     if (element.data.preview) {
  //       console.log(element.data.preview.images[0].source.url);
  //     }
  //   });
  // }, [reddit]);

  async function nextPage() {
    const response = await axios.get(
      `${corsproxy}${url}${reddit.currentSubreddit}.json?count=${
        reddit.page * 25
      }&after=${reddit.after}&raw_json=1`
    );

    setReddit({
      ...reddit,
      files: response.data.data.children,
      after: response.data.data.after,
      before: response.data.data.before,
      page: reddit.page + 1,
    });
    window.scrollTo(0, 0);
    // console.log("on next click -", reddit);
  }

  async function prevPage() {
    const response = await axios.get(
      `${corsproxy}${url}${reddit.currentSubreddit}.json?count=${
        (reddit.page - 1) * 25
      }&before=${reddit.before}&raw_json=1`
    );
    if (reddit.page > 1) {
      var newPage = reddit.page - 1;

      setReddit({
        ...reddit,
        files: response.data.data.children,
        after: response.data.data.after,
        before: response.data.data.before,
        page: newPage,
      });
    } else {
      setReddit({
        ...reddit,
        files: response.data.data.children,
        after: response.data.data.after,
        before: response.data.data.before,
        page: 1,
      });
    }
    // if (reddit.page > 1) {
    //   setReddit({ ...reddit });
    // }
    window.scrollTo(0, 0);
    // console.log("on prev click -", reddit);
  }
  let homepage =
    reddit.currentSubreddit === "" ? (
      <CardGrid />
    ) : (
      <ImageGrid files={reddit.files} onSubmit={searchSubreddit} />
    );

  const resetSubreddit = () => {
    setReddit({
      ...reddit,
      currentSubreddit: "",
    });
  };
  console.log(reddit);
  return (
    <div className="App">
      <Search onSubmit={searchSubreddit} />
      <h1 onClick={resetSubreddit} id="logo">
        <span>Redditax</span> <span className="half">Reddit</span>ax
        <span>Redditax</span>
      </h1>
      {/* <CardGrid /> */}
      {/* <ImageGrid files={reddit.files} /> */}
      {homepage}
      <div className="buttons">
        <button onClick={prevPage} className="prevButton">
          <i className="fas fa-arrow-left"></i>&nbsp; Prev
        </button>
        <h1>{reddit.page}</h1>
        <button onClick={nextPage} className="nextButton">
          Next&nbsp;
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
