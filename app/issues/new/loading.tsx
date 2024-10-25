import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewIssueLoadingPage = () => {
  return (
    <div className="space-y-3 max-w-xl">
      <Skeleton width={10} />
      <Skeleton height="20rem" />
      <Skeleton width={5} />
    </div>
  );
};

export default NewIssueLoadingPage;
