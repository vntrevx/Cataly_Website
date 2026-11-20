export const repository = "https://github.com/vntrevx/Cataly";
export const releases = `${repository}/releases`;
export const preview = `${releases}/tag/v0.1.2`;
export const documentation = `${repository}/blob/main/docs/releases.md`;
export const previewGuide = `${repository}/blob/v0.1.2/docs/releases.md#install-the-exact-preview`;
export const sourceGuide = `${documentation}#source-checkouts-for-maintainers`;

export const navigation = [
  { href: "#workflow", label: "How it works" },
  { href: "#get-started", label: "Get started" },
  { href: documentation, label: "Docs" },
] as const;

export const workflow = [
  {
    id: "request",
    title: "A request arrives",
    description:
      "With Discord intake enabled, tell Cataly what you want and what must stay intact. It carries the available reply context and attachment metadata into the work.",
  },
  {
    id: "assignment",
    title: "The lead assigns the work",
    description:
      "The lead handles small tasks directly or opens a lane: a dedicated OMP coding session with a brief and an explicit Done condition.",
  },
  {
    id: "execution",
    title: "The lane works and reports",
    description:
      "Follow the work through its linked messenger thread. Worklogs and checkpoints make progress inspectable, even across restarts.",
  },
  {
    id: "verification",
    title: "Completion is checked",
    description:
      "A claim isn't proof. The Done flow can check command results, file state, a merged pull request, or a package version, then report the evidence and what remains unverified.",
  },
] as const;
