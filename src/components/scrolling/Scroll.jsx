import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchData = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`
  );
  const data = await res.json();
  console.log(data);
  const totalCount = res.headers.get("X-Total-Count");
  const totalPages = Math.ceil(totalCount / 10);

  return {
    items: data,
    nextPage: pageParam < totalPages ? pageParam + 1 : null,
  };
};

function Scroll() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: "items",
    queryFn: fetchData,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center ">
      <InfiniteScroll
        dataLength={data ? data.pages.flat().length : 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p className="mt-4 text-center text-2xl py-4">
            <b>You have seen it all</b>
          </p>
        }
      >
        {data &&
          data.pages.map((page, i) => (
            <div key={i} className="">
              {page.items.map((item) => (
                <div
                  key={item.id}
                  className="py-6 px-4 bg-gray-200 text-lg  mt-2"
                >
                  {item.title}
                </div>
              ))}
            </div>
          ))}
      </InfiniteScroll>
    </div>
  );
}

export default Scroll;
