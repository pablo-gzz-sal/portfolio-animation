-- Explicit deny-all SELECT/UPDATE/DELETE policy. RLS already implicitly
-- denies when no policy matches, but an explicit policy guards against a
-- future permissive policy being added accidentally.
CREATE POLICY "Deny read access to contact submissions"
  ON public.contact_submissions
  FOR SELECT
  USING (false);

CREATE POLICY "Deny update access to contact submissions"
  ON public.contact_submissions
  FOR UPDATE
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Deny delete access to contact submissions"
  ON public.contact_submissions
  FOR DELETE
  USING (false);

-- Tighten table privileges so PostgREST only exposes INSERT to anon/authenticated.
REVOKE ALL ON public.contact_submissions FROM anon, authenticated;
GRANT INSERT ON public.contact_submissions TO anon, authenticated;

-- Admin/service role retains full access for server-side reads (e.g. future admin dashboard via edge/server fn).
GRANT ALL ON public.contact_submissions TO service_role;