// admin page with log in and powerbi platform later

import React from "react";
import Form from "./Form";

const Tiles: React.FC = () => {
  const forms = [
    {
      number: 1,
      name: "Check-in Form",
      description: (
        <p>
          Upon animal intake, fill out animal check-in form here to store basic
          information about a new animal. To input more information about the
          animal and further edit its profile, visit the{" "}
          <span style={{ fontWeight: "bold" }}>Animal Management</span> area on
          the dashboard.
        </p>
      ),
      link: "https://form.jotform.com/242856634248061",
    },
    {
      number: 2,
      name: "Check-out Form",
      description: (
        <p>
          For updating the status of an animal in the database{" "}
          <span style={{ fontWeight: "bold" }}>strictly</span> for adoption.
        </p>
      ),
      link: "#",
    },
    {
      number: 3,
      name: "Review Intake Forms",
      description: "Review Intake Form submissions on JotForm.",
      link: "https://form.jotform.com/242856687555070",
    },
    {
      number: 4,
      name: "Review Adoption Form",
      description:
        "Review Adoption Requests on JotForm and contact interested parties accordingly.",
      link: "https://form.jotform.com/242855970936168",
    },
    {
      number: 5,
      name: "Campaigns",
      description: "Manage donations campaigns.",
      link: "https://dashboard.givebutter.com/accounts/175158/campaigns",
    },
    {
      number: 6,
      name: "Transactions",
      description: "Track all donations and transactions.",
      link: "https://dashboard.givebutter.com/accounts/175158/transactions",
    },
    {
      number: 7,
      name: "Engagements",
      description: "Manage custom thank yous and emails.",
      link: "https://dashboard.givebutter.com/accounts/175158/engage/email ",
    },
  ];

  const numRows = Math.ceil(forms.length / 2);

  return (
    <div className="w-[50%] min-h-screen bg-white flex flex-col">
      <div
        className="grid grid-cols-3 gap-4 p-16 mt-16"
        style={{
          gridTemplateRows: `repeat(${numRows}, 1fr)`,
          height: "calc(120vh - 64px)",
        }}
      >
        {forms.map((form, index) => (
          <div
            key={form.number}
            className={
              index === forms.length - 1 && forms.length % 2 === 1
                ? "col-span-3"
                : index % 4 === 0 || index % 4 === 3
                  ? "col-span-2"
                  : "col-span-1"
            }
          >
            <Form
              name={form.name}
              description={form.description as string}
              link={form.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiles;
