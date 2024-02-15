import dbConnect from "@/app/lib/dbConnect";
import CommentModel from "@/app/models/Comments";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
  try {
    console.log("POST /api/comment");
    await dbConnect();

    const body = await req.json();

    const {from, videoId, image, fromEmail, message} = body;
    const response = await CommentModel.create({
      from,
      videoId,
      image,
      fromEmail,
      message,
    });

    return new NextResponse(JSON.stringify({data: response}), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({message: "Internal server error"}),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function GET(req: NextRequest): Promise<Response> {
  try {
    console.log("GET /api/comment");
    await dbConnect();
    const url = new URL(req.url);
    const videoId = url.searchParams.get("videoId");

    if (!videoId) {
      return new NextResponse(
        JSON.stringify({message: "No Comments found", data: []}),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const comments = await CommentModel.find({videoId});
    return new NextResponse(JSON.stringify({comments}), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({message: "Internal server error"}),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
