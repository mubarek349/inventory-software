import { BaggageClaim, BarChart4, ChevronLeft,ChevronRight,CloudCog,FolderClosed,Home, ShoppingBag, ShoppingCart } from "lucide-react";
import React from "react";
import Link from "next/link";
import SubscriptionCard from "@/components/dashboard/SubscriptionCard";
export default function SideBar() {
  return (
           <div className="w-60 min-h-screen bg-slate-800
            text-slate-50 fixed">
                {/*top part */}
               <div className="flex flex-col">
                    {/*(logo part) */}
                   <Link href="/dashboard/home/overview" className="flex bg-slate-950 space-x-2
                   items-center py-4 px-2">
                       <BaggageClaim /> 
                       <span className="font-semibold">Inventory</span>
                   </Link>
                    {/*links */}
                     <nav className="flex flex-col 
                     gap-4 p-3">
                        <Link className="flex items-center 
                        space-x-2 bg-blue-600 text-slate-50
                        p-2 rounded-md" href="/dashboard/home">
                            <Home  className="w-3 h-3"/>
                            <span>Home</span>
                        </Link>
                        <button className="p-2 flex items-center 
                        space-x-2" >
                            <BaggageClaim  className="w-3 h-3"/>
                            <span>Inventory</span>
                            <ChevronRight className="w-2 h-2 m-2"/>
                        </button>
                        <button className="p-2 flex items-center 
                        space-x-2" >
                            <ShoppingCart  className="w-3 h-3"/>
                            <span>Sales</span>
                        </button>
                        <button className="p-2 flex items-center 
                        space-x-2" >
                            <ShoppingBag  className="w-3 h-3"/>
                            <span>Purchases</span>
                        </button>
                        <Link className="p-2 flex items-center 
                        space-x-2" href="/dashboard/integrations">
                            <CloudCog  className="w-3 h-3"/>
                            <span>Integrations</span>
                        </Link>
                        <Link className="p-2 flex items-center 
                        space-x-2" href="/dashboard/reports">
                            <BarChart4 className="w-3 h-3"/>
                            <span>Reports</span>
                        </Link>
                        <Link className="p-2 flex items-center 
                        space-x-2" href="/dashboard/documents">
                            <FolderClosed  className="w-3 h-3"/>
                            <span>Documents</span>
                        </Link>
                     </nav>
               </div>




                {/*bottom part */}
                <div className="flex flex-col justify-end items-center">
                    {/*subscription card */}
                    <div className="flex">
                       <SubscriptionCard />
                    </div>
                </div>
                    {/*footer icon*/}
                <div className="mt-4 flex flex-col
                ">
                    <button className="justify-center p-2 flex bg-slate-900 space-x-2
                    py-4 px-2">
                    <ChevronLeft /> 
                    </button>
                </div>
                    
                

            </div>
  );
}
