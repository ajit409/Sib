import React from "react";

const blogPosts = [
  {
    title: "Is AI Going to Make Graphic Designers Jobless or Assist Them?",
    image: "../public/images/ai-graphic-designers-jobless-or-assist.jpeg", // Replace with actual path
    date: "03-04-2025",
    link: "#",
  },
  {
    title: "Create Studio Ghibli Magic: That Is Setting the Internet on Fire",
    image: "../public/images/create-studio-ghibli-magic-internet-sensation.jpeg",
    date: "29-03-2025",
    link: "#",
  },
  {
    title: "DeepSeek or DeepThreat? The AI Censorship Controversy",
    image: "../public/images/deepseek-or-deepthreat-ai-censorship-controversy.jpeg",
    date: "13-02-2025",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="text-center mb-10">
        <h5 className="text-[20px] font-bold ">Our Blogs</h5>
        <h2 className="text-4xl md:text-5xl font-bold text-red-600 mt-[20px]">
          Digital Marketing Learnings
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden h-[500px] flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[250px] object-cover "
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-[22px] font-semibold mb-3 flex-grow p-[15px]">
                {post.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
  <span>{post.date}</span>
  <a
  href={post.link}
  className="w-9 h-9 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 shadow-md"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</a>

</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
