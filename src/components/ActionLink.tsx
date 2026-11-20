import { Button } from "@horon-ai/react/components/button";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";

const indicators = {
  right: ArrowRightIcon,
  down: ArrowDownIcon,
  external: ArrowUpRightIcon,
  github: GithubLogoIcon,
};

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  tone?: "primary" | "outline" | "quiet";
  indicator?: keyof typeof indicators;
};

export function ActionLink({ href, children, tone = "primary", indicator = "right" }: ActionLinkProps) {
  const Icon = indicators[indicator];
  const icon = <Icon weight="regular" aria-hidden="true" />;
  return (
    <Button
      href={href}
      size="lg"
      variant={tone === "primary" ? "primary" : tone === "outline" ? "solid" : "link"}
      className={`action action--${tone}`}
    >
      {indicator === "github" && icon}
      <span>{children}</span>
      {indicator !== "github" && icon}
    </Button>
  );
}
