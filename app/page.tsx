import { Text } from "@radix-ui/themes";
import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  console.log(searchParams.page, parseInt(searchParams.page));

  return (
    <div>
      <Text>Hello World</Text>
      <Pagination
        currentPage={parseInt(searchParams.page)}
        itemCount={100}
        pageSize={10}
      />
    </div>
  );
}
