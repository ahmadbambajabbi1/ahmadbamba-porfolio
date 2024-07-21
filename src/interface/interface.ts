export interface PROJECTSINTERFACE {
  imgSrc: string;
  content: string;
  tools: TOOLINTERFACE[];
  link: string;
  name: string;
  status: "completed" | "pending";
}

export enum PROJECTSTATUS {
  completed = "completed",
  pending = "pending",
}

export interface TOOLINTERFACE {
  name: string;
}
