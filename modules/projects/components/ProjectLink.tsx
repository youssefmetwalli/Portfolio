import Link from "next/link";
import { useTranslations } from "next-intl";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { FiExternalLink as LinkIcon } from "react-icons/fi";
import { SiAppstore as AppStoreIcon } from "react-icons/si";

interface ProjectLinkProps {
  title?: string;
  link_github?: string;
  link_demo?: string;
  link_appstore?: string;
}

interface LinkComponentProps {
  url: string;
  text: string;
  icon: JSX.Element;
}

const LinkComponent = ({ url, text, icon }: LinkComponentProps) => {
  return (
    <Link href={url} target="_blank">
      <div className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300">
        <i>{icon}</i>
        <p className="text-sm transition-all duration-300 dark:text-teal-500 hover:dark:text-teal-400">
          {text}
        </p>
      </div>
    </Link>
  );
};

const Divider = () => (
  <span className="text-neutral-400 dark:text-neutral-600">|</span>
);

const ProjectLink = ({
  title,
  link_github,
  link_demo,
  link_appstore,
}: ProjectLinkProps) => {
  const t = useTranslations("ProjectsPage");

  // Build a list so separators are correct for any combination
  const links: JSX.Element[] = [];

  if (link_github) {
    links.push(
      <LinkComponent
        key="github"
        url={link_github}
        text={t("source_code_text")}
        icon={<GithubIcon size={22} />}
      />
    );
  }

  if (link_demo) {
    links.push(
      <LinkComponent
        key="demo"
        url={link_demo}
        text={t("live_demo_text")}
        icon={<LinkIcon size={22} />}
      />
    );
  }

  if (link_appstore) {
    links.push(
      <LinkComponent
        key="appstore"
        url={link_appstore}
        text="View on App Store"
        icon={<AppStoreIcon size={22} />}
      />
    );
  }

  if (links.length === 0) return null;

  return (
    <div className="flex gap-4">
      {links.map((el, idx) => (
        <div key={idx} className="flex items-center gap-4">
          {el}
          {idx < links.length - 1 ? <Divider /> : null}
        </div>
      ))}
    </div>
  );
};

export default ProjectLink;
