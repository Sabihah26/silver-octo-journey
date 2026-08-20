import { serve } from "https://deno.land/std/http/server.ts";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(async (req) => {
  const { description } = await req.json();

  await resend.emails.send({
    from: "Report Bot <onboarding@resend.dev>",
    to: "aarabicdictionary@gmail.com",
    subject: "New Report Submitted",
    text: `A new report was submitted:\n\n${description}`,
  });

  return new Response("Email sent", { status: 200 });
});
