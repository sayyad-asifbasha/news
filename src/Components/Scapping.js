import React ,{useState,useEffect}from 'react'
import axios  from 'axios';
import cheerio from 'cheerio';
// import { index } from 'cheerio/lib/api/traversing';
export default function scapping() {
    const [webData,setWebData]=useState([]);
    const WebSrcaping=()=>
    {
        useEffect(()=>
        {
            const fetchData = async()=>
            {
                const url="https://www.comingsoon.net/indian/news/1584485-is-jr-ntr-role-in-hrithik-roshan-upcoming-movie-war-2-revealed";
                const res=await axios.get(url);
                const $=cheerio.load(res.data);
                const headings=[];
                $('h1').each((index,element)=>
                {
                    headings.push($(element).text());
                })
                setWebData(headings);
            }
            fetchData();
        },[]);
    }
  return (
    <div>
        <h1>asf</h1>
        <ul>
            {webData.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
