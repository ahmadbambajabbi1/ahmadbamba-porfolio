import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import ProjectSection from "./ProjectSection";

export default function Tabss() {
  let tabs = [
    {
      id: "projects",
      label: "projects",
      content: <ProjectSection />,
    },
    {
      id: "sample codes",
      label: "sample codes",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "videos",
      label: "Videos",
      content: <ProjectSection />,
    },
  ];

  return (
    <div className="flex w-full flex-col mt-10">
      <Tabs
        className="shadow-none"
        draggable={true}
        aria-label="Dynamic tabs"
        items={tabs}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card className="shadow-none rounded-none">
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
