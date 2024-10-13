// admin page with log in and powerbi platform later

import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/form";

const FormsDashboard: React.FC = () => {
  const adminLinks = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Animal Dashboard", href: "/admin/animal-dashboard" },
    { name: "Financial Dashboard", href: "/admin/financial-dashboard" },
  ];

  const forms = [
    {
      number: 1,
      name: "Check-in Form",
      description:
        "Upon animal intake, fill out animal check-in form here to store basic information about a new animal including name, sex, and upload an image. To input more information about the animal and further edit it's profile, visit animal dashboard.",
      link: "https://form.jotform.com/242856634248061",
    },
    {
      number: 2,
      name: "Check-out Form",
      description:
        "For updating animal's data in database. Ex: updating animal's status to inactive",
      link: "#",
    },
    {
      number: 3,
      name: "Review Intake Forms",
      description:
        "Access Intake Form submissions dashboard here on JotForm. Review submissions on JotForm and contact rescuers accordingly/ facilitate the intake process.",
      link: "https://form.jotform.com/242856687555070",
    },
    {
      number: 4,
      name: "Review Adoption Form",
      description:
        "Access and review Adoption Request Form submissions dashboard here on JotForm. Review Adoption Requests and contact interested parties accordingly.",
      link: "https://form.jotform.com/242855970936168",
    },
  ];

  const numRows = Math.ceil(forms.length / 2);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar links={adminLinks} title="NEWRR Forms Dashboard" />
      <div
        className="grid grid-cols-3 gap-4 p-16 mt-16"
        style={{
          gridTemplateRows: `repeat(${numRows}, 1fr)`,
          height: "calc(100vh - 64px)",
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
              description={form.description}
              link={form.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormsDashboard;
