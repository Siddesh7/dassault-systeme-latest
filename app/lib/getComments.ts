export async function getComments(videoId: string) {
  try {
    const res = await fetch(`/api/comment/?videoId=${videoId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data.comments;
  } catch (error) {
    console.error("Failed to post data", error);
  }
}
