import poopdata from "@/app/constants"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export default function () {
  return (
    <Table>
      
        <TableHeader className="">
          <TableRow className="">
            
            <TableHead className="text-sky-500 font-bold">Local Government</TableHead>
            <TableHead className="text-sky-500 font-bold">Vol. Tanker Water Supplied</TableHead>
            <TableHead className="text-sky-500 font-bold">Vol. Sewage Evacuation</TableHead>
            <TableHead className="text-right text-sky-500 font-bold">Water Cycle Efficiency</TableHead>
            <TableHead className="text-right text-sky-500 font-bold">Revenue Earned</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody className="">
            {poopdata.map((data) =>(
                <TableRow key={data.lg} className="text-center border-none">
                <TableCell className="font-semibold text-sky-600 text-left"><span className="rounded-full me-2 bg-slate-700 p-2 text-blue-300 font-medium">{data.lg_short}</span>{data.lg}</TableCell>
                <TableCell className="">22,000L</TableCell>
                <TableCell>12,000L</TableCell>
                <TableCell className=""><span className={`rounded-2xl ${data.bg_color} p-2 `}>0.1%</span></TableCell>
                <TableCell>{data.revenue_earned}</TableCell>
              </TableRow>
            ))}          
            
        
        </TableBody>
      </Table>
  )
}
