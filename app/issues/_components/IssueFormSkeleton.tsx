import { Skeleton } from "@/app/components";

const IssueFormSkeleton = () => {
  return (
    <div className="space-y-3 max-w-2xl">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
      <Skeleton height="2rem" width="10rem" />
    </div>
  );
};

export default IssueFormSkeleton;
