export async function POST() {
  return Response.json(
    {
      message:
        "This unofficial Veriq demo does not deliver form submissions. Contact Jason directly by phone, text, or email.",
    },
    { status: 503 },
  );
}
