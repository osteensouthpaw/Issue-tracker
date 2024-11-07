import { Text } from "@radix-ui/themes";
import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div>
      <Text>Hello World</Text>
      <Pagination
        currentPage={10}
        itemCount={100}
        pageSize={parseInt(searchParams.page)}
      />
    </div>
  );
}
