import * as React from "react"
interface LG_Props {
    top_title: string;
    top_title_num: number;
    top_measurement: string;
    bottom_title: string;
    bottom_title_num: number;
    bottom_measurement: string;
    bg_color:string;
    text_color?:string;
    card_height?: string
  }

  const Card: React.FC<LG_Props> = ({card_height, bg_color,text_color,top_title, top_title_num, top_measurement, bottom_title, bottom_title_num, bottom_measurement})  =>{
    return (
        <div className={`${bg_color} ${text_color} ${card_height} flex flex-col justify-between h-[300px] w-full p-6 rounded-xl`}>
            <div className="">
                <h5>{top_title}</h5>
                <h1>{top_title_num}</h1>
                <h5>{top_measurement}</h5>
            </div>
            <div>
                <h5>{bottom_title}</h5>
                <h1>{bottom_title_num}</h1>
                <h5>{bottom_measurement}</h5>
            </div>
        </div>
    )
  }

  export default Card