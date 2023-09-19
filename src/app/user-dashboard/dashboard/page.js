"use client";
import { useState } from "react";
import UserSidebar from "@/components/molecules/UserSidebar";
import DisplayNews from "@/components/molecules/DisplayNews";
import Cards from "@/components/atoms/Cards";
import Layout from "@/components/atoms/Layout";
import EditorsPick from "@/components/molecules/EditorsPick";

const Dashboard = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="grid grid-cols-[auto_1fr]">
        <UserSidebar />
        {/* <Layout> */}
        <div>
          <div className="grid grid-cols-2 gap-3 p-5">
            <DisplayNews />
            <EditorsPick />
          </div>
          {/* <Cards text="Trending" /> */}
        </div>
        {/* </Layout> */}
      </div>
    </div>
  );
};

export default Dashboard;
