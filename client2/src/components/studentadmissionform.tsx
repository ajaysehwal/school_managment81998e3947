import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import {
    UserPlusIcon,
    UserCircleIcon,
    DocumentArrowUpIcon,
  } from "@heroicons/react/24/solid";
  import StudentAdmissionform from './Studentform';
  import ChartTwo from './ChartTwo';
  import Excelupload from './excelupload';
export default function Studentadmissionform() {
    const data = [
        {
          label: "Form",
          value: "Form",
          icon: UserPlusIcon,
          desc: <StudentAdmissionform/>
        },
        {
          label: "Profile",
          value: "profile",
          icon: UserCircleIcon,
          desc: <ChartTwo/>
        },
        {
          label: "Excel",
          value: "Excel",
          icon: DocumentArrowUpIcon,
          desc: <Excelupload/>
        },
      ];
  return (
    <div>
        <Tabs  className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4" value="dashboard">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
  )
}