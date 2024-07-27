import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
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
      content: <ProjectSection />,
    },
    {
      id: "videos",
      label: "Videos",
      content: <ProjectSection />,
    },
  ];

  return (
    <div className="flex w-full flex-col mt-10 bg-none">
      <Tabs
        className="shadow-none bg-inherit"
        draggable={true}
        aria-label="Dynamic tabs"
        items={tabs}
      >
        {(item) => (
          <Tab className="bg-none" key={item.id} title={item.label}>
            <Card className="shadow-none rounded-none bg-inherit">
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
