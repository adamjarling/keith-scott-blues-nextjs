// @ts-nocheck

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Latest News",
};

const NewsPage = async () => {
  const blogId = "1874227029775015733";
  const postsUrl =
    "https://www.googleapis.com/blogger/v3/blogs/" +
    blogId +
    "/posts?key=" +
    process.env.BLOGGER_API_KEY;

  let blogPosts;

  try {
    const response = await fetch(postsUrl);
    blogPosts = await response.json();
  } catch (error) {
    console.error("Error fetching blog posts", error);
  }

  return (
    <Main>
      <Banner>
        <BannerHeadline>Latest News</BannerHeadline>
      </Banner>
      <p className="pb-5 text-center">
        Having a ball ya'll cruising around the world playing blues and fishing.
      </p>
      <section className="container">
        <BlogPosts blogPosts={blogPosts.items} />
      </section>
    </Main>
  );
};

function createMarkup(content) {
  return { __html: content };
}

function BlogPosts({ blogPosts }) {
  return (
    <>
      {blogPosts.map((post) => (
        <div className="pb-20 mb-20 text-center border-b">
          <a href={post.url}>
            <h2 className="text-2xl">{post.title}</h2>
          </a>
          <p className="font-light text-gray-600">
            Date: {new Date(post.updated).toLocaleString()}
          </p>

          <div dangerouslySetInnerHTML={createMarkup(post.content)} />
        </div>
      ))}
    </>
  );
}

export default NewsPage;
