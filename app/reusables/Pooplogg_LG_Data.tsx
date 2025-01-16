"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import Card from "./components/Card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Pooplogg_LG_Data(){
    const [position, setPosition] = React.useState("bottom")
    return(
        <div className="mx-10 my-8">
          <div className="flex items-center space-x-8">
          <button className="bg-amber-400 text-[#025949] text-sm my-4 p-3 px-10 rounded-2xl">Data By Local Government</button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <Button variant={"outline"}>Surulere <ChevronDown/> </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Locations</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                      <DropdownMenuRadioItem value="ajah">Ajah</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="ikeja">Ikeja</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="lekki">Lekki</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="surulere">Surulere</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex space-x-10 gap-10">
                <div className="flex-1 flex space-x-4" >
                <Card top_measurement="lg data" top_title="top"  top_title_num={200} bg_color="bg-slate-200" bottom_measurement="bottom" bottom_title_num={30} bottom_title="Bottom"/>
                <Card top_measurement="lg data" top_title="top" top_title_num={200} text_color="text-white" bg_color="bg-blue-900" bottom_measurement="bottom" bottom_title_num={30} bottom_title="Bottom"/>
                <Card top_measurement="lg data" top_title="top" top_title_num={200} bg_color="bg-slate-200" bottom_measurement="bottom" bottom_title_num={30} bottom_title="Bottom"/>
                </div>
                <div className="">
                <div className="w-[600px] flex space-x-6">
                  <div className="flex bg-slate-100 h-[200px] space-x-6 p-4 rounded-xl border border-red-50 w-full">
                    <div className="flex-col space-y-10 p-2">
                      <span className="bg-blue-950 text-white text-xs py-1 px-2 rounded-3xl">No Bore Hole</span>
                      <div>
                        <p className="text-lg text-slate-600"> State Owned</p>
                        <h3 className="text-[39px] font-bold">120</h3>
                      </div>
                    </div>
                    <div className=" space-y-2">
                      
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="h-2 w-2 bg-green-600 rounded-full"></span> <h5>Operational</h5>
                        </div>
                        <div className="ms-6"><h3 className="font-bold">60%</h3></div>
                      
                      <div className="row-2">
                       <div className="flex items-center space-x-4 text-sm">
                          <span className="h-2 w-2 bg-amber-600 rounded-full"></span> <h5 >Needs Maintenance</h5>
                        </div>
                        <div className="ms-6"><h3 className="font-bold">60%</h3></div>
                      </div>

                      <div className="row-3">
                        <div className="flex items-center space-x-4 text-sm">
                            <span className="h-2 w-2 bg-red-400 rounded-full"></span> <h5 className="text-xs">Non Operational</h5>
                        </div>
                        <div className="ms-6"><h3 className="font-bold">60%</h3></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex bg-slate-100 h-[180px] rounded-xl border border-red-50 w-full">
                  <div className="flex bg-slate-100 h-[200px] space-x-6 p-2 pt-2 rounded-xl border border-red-50 w-full">
                    <div className="flex-col space-y-10 p-2 pt-2">
                      <span className="bg-blue-950 text-white text-xs py-1 px-2 rounded-3xl">No Bore Hole</span>
                      <div>
                        <p className="text-lg text-slate-600"> State Owned</p>
                        <h3 className="text-[39px] font-bold">120</h3>
                      </div>
                    </div>
                    <div className=" space-y-2">
                      
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="h-2 w-2 bg-green-600 rounded-full"></span> <h5>Operational</h5>
                        </div>
                        <div className="ms-6"><h3 className="font-bold">60%</h3></div>
                      
                      <div className="row-2">
                       <div className="flex items-center space-x-4 text-sm">
                          <span className="h-2 w-2 bg-amber-600 rounded-full"></span> <h5 >Needs Maintenance</h5>
                        </div>
                        <div className="ms-6"><h3 className="font-bold">60%</h3></div>
                      </div>

                      <div className="row-3">
                        <div className="flex items-center space-x-4 text-sm">
                            <span className="h-2 w-2 bg-red-400 rounded-full"></span> <h5 className="text-xs">Non Operational</h5>
                        </div>
                        <div className="ms-6"><h3 className="font-bold">60%</h3></div>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                </div>
                <div className="flex border border-slate-200 p-4 my-2 rounded-xl text-slate-500  justify-between">
                  <div className="flex-col space-y-3">
                    <h3>Population Size</h3>
                    <h1 className="font-bold text-3xl text-blue-500">200,000</h1>
                  </div>
                  <div className="space-y-3">
                      <h3>Access To Clean Water</h3>
                      <h1 className="font-bold text-3xl text-blue-950">29% <span className=" bg-blue-950 text-white font-light text-sm p-3 px-5 rounded-3xl">Private </span></h1>
                  </div>
                  <div className="space-y-3">
                  <h3>Access To Clean Water</h3>
                  <h1 className="font-bold text-3xl  text-blue-950">29% <span className=" bg-blue-950 text-white font-light text-sm p-3 px-5 rounded-3xl">Private </span></h1>
                  </div>
                </div>
                
                </div>
              </div>
          </div>
    )
}