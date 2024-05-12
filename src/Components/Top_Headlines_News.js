import axios from 'axios';
import { useState, useEffect } from 'react';
import './NewsItems.css'
import NewsItems from './NewsItems';
// import LoadingBar from 'react-top-loading-bar'

// let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3250e7d8113e475bbf5f9e6f432dda5c";
// let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=dc3e6eded1584bd7bbb7dedba5ec17b5";
let url = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=03ded8b29e214785ac1c6e4b0876b395";

// 03ded8b29e214785ac1c6e4b0876b395 //asifsayyad200483

export default function Top_Headlines_News() {
  const [progress, setProgress] = useState(0);
  const [nextCount, setNextCount] = useState(6);
  const [data, setData] = useState({});
  const allocateData = async () => {
    // setProgress(20);
    if (!localStorage.getItem('Top_Headlines')) {
      const response = await axios.get(url);
      // setProgress(50);
      let result = response.data;
      // setProgress(80);
      localStorage.setItem('Top_Headlines', JSON.stringify(result));
      setData(JSON.parse(localStorage.getItem('Top_Headlines')));
      // setProgress(100);
      console.log("hiited")
    }
    else {
      // setProgress(50);
      setData(JSON.parse(localStorage.getItem('Top_Headlines')));
      // setProgress(80);
    }
  };
  useEffect(() => {
    allocateData();
  }, []);
  setInterval(() => {
    localStorage.clear();
    allocateData();
    setNextCount(nextCount);
  }, 300000);
  let length = Object(data["articles"]).length;
  function returnItem(e) {
    // setProgress(100);
    if (e.description !== "[Removed]") {
      return (<div key={e.title}>
        <NewsItems url={e.urlToImage} headline={e.title} description={e.description} />
      </div>);
    }
  }


  let btnNext = () => {
    if (nextCount + 7 < length) {
      setNextCount(nextCount + 7);
    }
    else {
      setNextCount(nextCount + (length - nextCount));
      console.log(document.getElementById("next"));
      document.getElementById("next").style.display = "none";
      document.querySelector("#move").style.display = "block";
    }
  }
  let toMove = () => {
    window.scroll(0, 0);
  }
  return (
    <>
      {/* <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}
      <div id="mainDiv">
        {
          data.articles && data.articles.slice(0, nextCount).map((article) => {
            return (
              returnItem(article)
            );
          })

        }
      </div>
      <div className="btns">
        <button disabled={nextCount >= length} className="next cbtn" id="next" onClick={btnNext}>ReadMore....</button>
        <button className="move" id="move" onClick={toMove}><span>︽</span></button>
      </div>
    </>
  );
}

