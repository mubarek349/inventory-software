import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
       <h2 className="text-3xl mb-4">
          Inventory Management Software
       </h2>
       <a href="/dashboard/home/overview" className="text-white bg-blue-700 
                hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
                py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800 inline-flex items-center">View Dashboard</a>
    </div>
  );
}
