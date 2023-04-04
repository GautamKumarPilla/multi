import React,{useEffect, useState}  from 'react'; 
import EmojiData from './Emoji.json';    //if file extension .jsx is used inplace of .js not working

const Emoji = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  return (
    <div>
      <center>
        <h1>Emoji Search Engine</h1>
        <input size="30" type="text" value={search} onChange={(z) => setSearch(z.target.value)} />
        </center>
        {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copied!")}}>
            {emoji.symbol} {emoji.title}
          </div>
    </div>
        )}
      
    </div>
  )
}

export default Emoji