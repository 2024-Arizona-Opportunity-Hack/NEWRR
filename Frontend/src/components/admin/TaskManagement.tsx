import React from "react";
import Tile from "./Tiles";
import ToDo from "./ToDo";
import { DollarSign, FileText, MessageSquare, CheckSquare } from "lucide-react";

const TaskManagement: React.FC = () => {
  const sections = [
    {
      title: "GiveButter",
      icon: <DollarSign className="w-6 h-6" />,
      items: [
        {
          name: "Donations",
          icon: <DollarSign className="w-4 h-4" />,
          url: "https://dashboard.givebutter.com/accounts/175158/campaigns",
        },
        {
          name: "Reports",
          icon: <FileText className="w-4 h-4" />,
          url: "https://dashboard.givebutter.com/accounts/175158/transactions",
        },
        {
          name: "Emails",
          icon: <MessageSquare className="w-4 h-4" />,
          url: "https://dashboard.givebutter.com/accounts/175158/contacts",
        },
        {
          name: "Thank You Cards",
          icon: <FileText className="w-4 h-4" />,
          url: "https://dashboard.givebutter.com/accounts/175158/engage/email",
        },
      ],
    },
    {
      title: "Forms",
      icon: <FileText className="w-6 h-6" />,
      items: [
        {
          name: "Animal Intake",
          icon: <FileText className="w-4 h-4" />,
          actions: ["Share", "Responses"],
          url: "https://www.jotform.com/inbox/242856687555070",
          url2: "https://form.jotform.com/242856687555070",
        },
        {
          name: "Animal Adoption",
          icon: <FileText className="w-4 h-4" />,
          actions: ["Share", "Responses"],
          url: "https://www.jotform.com/inbox/242855970936168",
          url2: "https://form.jotform.com/242855970936168",
        },
        {
          name: "Check-in",
          icon: <CheckSquare className="w-4 h-4" />,
          url: "https://form.jotform.com/242856634248061",
        },
        {
          name: "Check-out",
          icon: <CheckSquare className="w-4 h-4" />,
          url: "/check-out",
        },
      ],
    },
  ];

  return (
    <div
      className="flex flex-col md:flex-row w-full bg-wolfwhite px-4 md:px-6 lg:px-8 pt-20 font-['Montserrat']"
      id="/admin/dashboard/#tasks"
    >
      <div className="w-full md:w-1/2 md:pr-3 mb-6 md:mb-0 pt-20 pb-20">
        <ToDo />
      </div>
      <div className="w-full md:w-1/2 md:pl-3 space-y-6 pt-20 pb-20">
        <div className="flex flex-col md:flex-row gap-4">
          {sections.map((section, index) => (
            <div key={index} className="w-full md:w-1/2">
              <Tile {...section} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
