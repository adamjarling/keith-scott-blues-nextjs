import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News",
};

interface BlogPost {
  id: string;
  title: string;
  content: string;
  url: string;
  updated: string;
}

interface BloggerResponse {
  items?: BlogPost[];
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const blogId = "1874227029775015733";
  const apiKey = process.env.BLOGGER_API_KEY;

  if (!apiKey) {
    console.error("BLOGGER_API_KEY environment variable is not set");
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      console.error("Failed to fetch blog posts:", response.statusText);
      return [];
    }

    const data: BloggerResponse = await response.json();
    return data.items ?? [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

function createMarkup(content: string) {
  return { __html: content };
}

function BlogPosts({ blogPosts }: { blogPosts: BlogPost[] }) {
  if (blogPosts.length === 0) {
    return <p className="text-center text-gray-500">No news posts available.</p>;
  }

  return (
    <>
      {blogPosts.map((post) => (
        <div key={post.id} className="pb-20 mb-20 text-center border-b">
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

export default async function NewsPage() {
  const blogPosts = await getBlogPosts();

  return (
    <Main>
      <Banner>
        <BannerHeadline>Latest News</BannerHeadline>
      </Banner>

      <section className="container">
        <div className="max-w-2xl mx-auto">
          <BlogPosts blogPosts={blogPosts} />
        </div>
      </section>
    </Main>
  );
}
