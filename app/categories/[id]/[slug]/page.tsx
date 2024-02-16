"use client";
import CommentsSection from "@/app/components/Comments";
import Navbar from "@/app/components/Navbar";
import {
  getExpVideo,
  getRelatedVideos,
  getYoutubeId,
  truncateText,
} from "@/app/lib/Exp";
import {useSession} from "next-auth/react";

import Link from "next/link";
import {useEffect, useState} from "react";

const VideoPage = ({params}: {params: {id: string; slug: string}}) => {
  const video = getExpVideo(params.id, Number(params.slug));
  const [comments, setComments] = useState<any[]>([]);
  const [relatedVideos, setRelatedVideos] = useState<any[]>([]);
  const [commentInput, setCommentInput] = useState("");

  const {data: session} = useSession();
  console.log(session);
  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(
        `/api/comment/?videoId=${`${params.id}-${params.slug}`}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setComments(data.comments);
    };
    fetchComments();
  }, []);
  useEffect(() => {
    const relatedVideos = getRelatedVideos(params.id);
    setRelatedVideos(relatedVideos);
  }, []);
  const postComment = async () => {
    if (!commentInput || commentInput.length < 1) return;
    const res = await fetch(`/api/comment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: session?.user?.name || "null",
        videoId: `${params.id}-${params.slug}`,
        image:
          session?.user?.image ||
          "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg",
        fromEmail: session?.user?.email || "null",
        message: commentInput,
      }),
    });
    const data = await res.json();
    setComments([...comments, data.data]);
    setCommentInput("");
  };
  return (
    <main className="bg-[#151515]">
      <div className="px-2 md:px-6 py-2 md:py-6 min-h-screen bg-cover bg-[url('/color-sharp.png')] bg-right-bottom">
        <div className="w-[96vw] mx-auto">
          <Navbar />
        </div>

        {session?.user ? (
          <div className="flex flex-col md:flex-row  gap-4 w-[90vw] m-auto my-14">
            {/* Main Video Section */}
            <div className="flex-1">
              <div className="aspect-video rounded-xl">
                {/* Replace this div with your video player component */}
                <iframe
                  className="w-full h-full rounded-xl"
                  src={`https://www.youtube.com/embed/${getYoutubeId(
                    video.YOUTUBE
                  )}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="mt-4">
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {video.EXP}
                </h3>
                <p className="mt-2 text-gray-500">{video.DESCRIPTION}</p>
              </div>

              <div className="flex flex-row items-center gap-4 mt-8">
                <div className="w-10 rounded-full">
                  <img
                    alt="user"
                    src={session?.user?.image}
                    className="rounded-full w-10"
                  />
                </div>
                <div className="flex flex-row w-full gap-2">
                  {" "}
                  <input
                    type="text"
                    placeholder="Type your comments here..."
                    className="input input-bordered w-[74%]"
                    onChange={(e) => setCommentInput(e.target.value)}
                    value={commentInput}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        postComment();
                      }
                    }}
                  />
                  <button className="btn btn-primary" onClick={postComment}>
                    Post Comment
                  </button>
                </div>
              </div>

              <CommentsSection comments={comments} />
            </div>

            {/* Recommended Videos Sidebar */}
            <div className="w-full md:w-80 flex-shrink-0">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Recommended
              </h3>
              {/* Loop through your recommended videos */}
              {relatedVideos.map((video, index) => (
                <div key={index}>
                  <Link href={`/categories/mechanical/${video.index}`}>
                    <div className="flex gap-4 mb-4 p-2 hover:bg-white/10 rounded-lg cursor-pointer">
                      <div className="w-32 h-32 flex-none bg-gray-200 rounded-xl overflow-hidden">
                        <img
                          src={`/mechanical/${video.index}.png`}
                          alt="Video Thumbnail"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-white">
                          {truncateText(video.item.EXP, 44)}
                        </h4>
                        <p className="pt-2 md:hidden">
                          {video.item.DESCRIPTION}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[80vh] text-2xl">
            Please login to view the content
          </div>
        )}
      </div>
    </main>
  );
};

export default VideoPage;
