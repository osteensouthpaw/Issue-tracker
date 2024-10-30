import React from "react";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";
const IssueForm = dynamic(() => import("../_components/IssueForm"), {
  loading: () => <IssueFormSkeleton />,
  ssr: false,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
