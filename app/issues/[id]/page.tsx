import { authOptions } from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import AssigneeSelect from "./AssigneeSelect";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import { cache } from "react";

interface Props {
  params: { id: string };
}

const fetchIssue = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } })
);

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);
  const issue = await fetchIssue(parseInt(params.id));

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box className="flex gap-4 flex-col">
          <AssigneeSelect issue={issue} />
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </Box>
      )}
    </Grid>
  );
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const issue = await fetchIssue(parseInt(params.id));

  return {
    title: issue?.title,
    description: "Description of issue" + issue?.id,
  };
}

export default IssueDetailPage;
