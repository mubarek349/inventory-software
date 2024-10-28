import HomeNavBar from "@/components/dashboard/HomeNavBar";
import React from "react";
export default function Layout({children}){
    return(
        <div className="bg-orange-500">
            <HomeNavBar/>
            {children} 
        </div>
    );
}