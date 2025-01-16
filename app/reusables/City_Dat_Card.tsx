import * as React from "react"
interface Props {
    top_title: string;
    subtitle: string;
    left_num: number;
    bottom_right_badge: string;
    currency?:string;
    bg_color?: string;
    styles?:string
  }

const City_Dat_Card: React.FC<Props> = ({top_title, subtitle, bottom_right_badge,left_num, currency, bg_color, styles}) =>{
    return(
        <div className={`flex-1 flex ${bg_color} p-4 text-white space-x-10 justify-between rounded-2xl`}>
                     <div className=" space-y-10">
                        <div className="\">
                            <h3 className="font-bold ">{top_title}</h3>
                            <p>{subtitle}</p>
                        </div>
                        <div className="w-full h-2 rounded-2xl bg-white border shadow-xl">
                            <div className={`w-2/3 h-2 rounded-2xl bg-green-500`}/>
                        </div>

                     </div>
                     <div className="space-y-10">
                        <p className=" ">{currency}<span className="text-3xl font-extrabold text-white"> {left_num}</span></p>
                        <div className={`${styles}`}>
                            <p>Today <span className="bg-white text-sky-400 p-2 rounded-2xl">{bottom_right_badge}</span></p>
                        </div>
                     </div>
                </div>
    )
}
export default City_Dat_Card