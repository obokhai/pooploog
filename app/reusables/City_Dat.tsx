import { Plus } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import City_Dat_Card from "./City_Dat_Card"

export default function City_Dat(){
    return(
        <div className="mx-10 my-3">
            <div className="flex justify-between">
                <div className="">
                    <p>City Data</p>
                </div>
                <div className="flex space-x-10 ">
                    <div className="bg-[#fceeca]  flex px-5 py-1 rounded-full text-sm items-center gap-x-3">Add Local Government <span className="p-1 rounded-full bg-[#71491A] text-white"><Plus className="text-sm"/></span></div>
                    <div className="bg-[#E5EEFF] flex px-5 py-1 rounded-full text-sm items-center gap-x-2">Add Managers <span className="bg-sky-700 p-1 rounded-full text-white"><Plus/></span></div>
                </div>
            </div> 
            <div className="flex justify-between gap-6 my-3">
                <div className="w-[293px] h-[138px] bg-[#F5F5F5] space-y-6 p-3 rounded-xl text-sky-500">
                    
                    <div>
                        <h3 className="text-lg font-semibold">Onboarded</h3>
                        <p>Waste Infrastructure</p>
                    </div>

                    <p className="text-3xl font-bold">1000</p>
                </div>
                
                <City_Dat_Card top_title="Registered" subtitle="Local Government" left_num={400} bottom_right_badge="6 Added" bg_color="bg-slate-600"/>
                <City_Dat_Card top_title="City" subtitle="Managers" left_num={20} bottom_right_badge="6 Added" bg_color="bg-blue-600"/>
                <City_Dat_Card top_title="Wallet" subtitle="Balance" currency="NGN" left_num={300000} styles="ms-20" bottom_right_badge="67 %" bg_color="bg-[#06966E]"/>
              \
            </div>
        </div>
    )
}