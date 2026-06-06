import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  company: z.string().max(200).optional().nullable(),
  message: z.string().min(1).max(5000),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let json: unknown;
        try {
          json = await request.json();
        } catch {
          return Response.json(
            { error: "Invalid JSON body" },
            { status: 400 }
          );
        }

        const parsed = ContactSchema.safeParse(json);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid input", details: parsed.error.flatten() },
            { status: 400 }
          );
        }

        const { supabaseAdmin } = await import(
          "@/integrations/supabase/client.server"
        );

        const { error } = await supabaseAdmin
          .from("contact_submissions")
          .insert({
            name: parsed.data.name,
            email: parsed.data.email,
            company: parsed.data.company ?? null,
            message: parsed.data.message,
          });

        if (error) {
          console.error("[contact] insert failed", error);
          return Response.json(
            { error: "Could not save your message. Please try again." },
            { status: 500 }
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
