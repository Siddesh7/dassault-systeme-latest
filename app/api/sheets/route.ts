import {google} from "googleapis";
import {NextResponse} from "next/server";

export async function POST(req: any) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: process.env.GOOGLE_SHEET_TYPE,
      project_id: process.env.GOOGLE_SHEET_PROJECT_ID,
      private_key_id: process.env.GOOGLE_SHEET_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_SHEET_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_SHEET_CLIENT_ID,
    },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const sheets = google.sheets({version: "v4", auth});
  const spreadsheetId = "1crXtDXzFWp7fDnBvwjhJUKqysHaJzppX_JZHbUi8XC4";
  const valueInputOption = "USER_ENTERED";
  const body = await req.json();
  const {values, sheetName} = body;

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: sheetName,
      valueInputOption,
      requestBody: {
        values: [values],
      },
    });
    return new NextResponse(JSON.stringify({message: "Added successfully"}), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({message: error}), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
export async function GET(req: any) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: process.env.GOOGLE_SHEET_TYPE,
      project_id: process.env.GOOGLE_SHEET_PROJECT_ID,
      private_key_id: process.env.GOOGLE_SHEET_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_SHEET_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_SHEET_CLIENT_ID,
    },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const sheets = google.sheets({version: "v4", auth});
  const spreadsheetId = "1crXtDXzFWp7fDnBvwjhJUKqysHaJzppX_JZHbUi8XC4";

  const url = new URL(req.url);
  const range = url.searchParams.get("sheetName");
  if (!range)
    return new NextResponse(
      JSON.stringify({message: "No sheet name provided"}),
      {status: 200, headers: {"Content-Type": "application/json"}}
    );
  try {
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    return new NextResponse(JSON.stringify({data: result.data.values}), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({message: error}), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
