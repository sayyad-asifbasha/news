import axios from 'axios';
import { useState, useEffect } from 'react';
import './NewsItems.css'
import NewsItems from './NewsItems';
// let url="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3250e7d8113e475bbf5f9e6f432dda5c";
// let url="https://newsapi.org/v2/everything?q=tollywood&apiKey=03ded8b29e214785ac1c6e4b0876b395";

// let url="https://newsapi.org/v2/everything?q=tollywood&apiKey=dc3e6eded1584bd7bbb7dedba5ec17b5";


let url="https://newsapi.org/v2/everything?q=tollywood&apiKey=03ded8b29e214785ac1c6e4b0876b395";



export default function Tollywood_News() {
  // allocateData();
  const [nextCount,setNextCount]=useState(6);
  const [data, setData] = useState({});
  const allocateData = async () => {
    if (!localStorage.getItem('Tollywood')) {
      const response = await axios.get(url);
      let result = response.data;
      localStorage.setItem('Tollywood', JSON.stringify(result));
      setData(JSON.parse(localStorage.getItem('Tollywood')));
      console.log("hiited")
    }
    else {
      setData(JSON.parse(localStorage.getItem('Tollywood')));
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
  let length=Object(data["articles"]).length;
  function returnItem(e) {
    if (e.description !== "[Removed]") {
      return (<div key={e.title}>
        <NewsItems url={e.urlToImage} headline={e.title} description={e.description}/>
      </div>);
    }
  }
  let toMove=()=>
  {
    window.scroll(0,0);
  }

  let  btnNext=()=>
  {
    if(nextCount+7<=length)
    {
      setNextCount(nextCount+7);
    }
    else{
      setNextCount(nextCount+(length-nextCount));
      document.getElementById("next").style.display="none";
      document.querySelector("#move").style.display="block";
      
    }
  }
  return (
    <>
      <div id="mainDiv">
        {
          data.articles && data.articles.slice(0,nextCount).map((article) => {
            return (
              returnItem(article)
            );
          })

        }
      </div> 
      {/* {console.log("a+b")} */}
      <div className="btns">
        <button  disabled={nextCount>=length} className="next cbtn" id="next" onClick={btnNext} >ReadMore....</button>
        <button className="move" id="move" onClick={toMove }><span>︽</span></button>

      </div>
    </>
  );
}

