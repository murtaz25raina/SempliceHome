import {useState} from 'react';
import Collapse from '../assets/faq_collapse.svg'
import Expand from '../assets/faq_expand.svg'
import "./qa.css";

const Questsion =(props)=>{
    const [showExpand,setShowExpand] = useState(true);
    return(
        <div style={!showExpand?{background:'#fff',
        padding: '20px',
        borderRadius: '20px',
        margin: '10px 0 10px -20px',
        cursor: 'pointer'        
        }:{}}>
        <div className="question-icon-container"  onClick={()=>setShowExpand(!showExpand)}>
          <div className="question-qa">
            {props.question}
          </div>
          <div>
            {showExpand?<img src={Expand} style={{width:'108px'}} alt="#"/>
            :<img src={Collapse} style={{width:'108px'}} alt="#"/>}
          </div>
        </div>
        {!showExpand ? <div className='answer-qa'>
          {props.answer}
        </div>:null}
      </div>
    )
}

export default Questsion;