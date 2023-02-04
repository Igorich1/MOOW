import React from "react";
import "./Presentation.css";
import YoutubeEmbed from './YoutubeEmbed/YoutubeEmbed';
import MoowBig from './img/MoowBig.svg'
export default function Presentation() {
  return (
    <div className="wrapper-presentation">
      <h1 className="title-presentation" >Про MOOW за 2 хвилини</h1>
<div className="container-presentation" >
<img className="img-moow__big" alt="MoowBig"  src={MoowBig} ></img>
<YoutubeEmbed embedId="rokGy0huYEA" className='d' />

<img className="img-moow__big" alt="MoowBig"  src={MoowBig} ></img>


</div>
      
    </div>
  );
}
