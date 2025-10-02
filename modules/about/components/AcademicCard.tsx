"use client";

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineAcademicCap as AcademicIcon } from "react-icons/hi2";
import { HiChevronRight as ChevronIcon } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";

import SpotlightCard from "@/common/components/elements/SpotlightCard";
import { AcademicProps } from "@/common/types/academics";

const AcademicCard = ({
  course,
  institution,
  logo,
  location,
  academicYears,
  link,
  role = "Teaching Assistant",
  location_type,
  responsibilities,
  indexAcademic,
}: AcademicProps) => {
  const [isShowResponsibility, setIsShowResponsibility] = useState(false);

  const locale = useLocale();

  const hideText = locale === "ja" ? "非表示" : locale === "en" ? "Hide" : "非表示";
  const showText = locale === "ja" ? "表示" : locale === "en" ? "Show" : "表示";
  const responsibilityText = locale === "ja" ? "職務内容" : locale === "en" ? "responsibilities" : "職務内容";
  const ayLabel = locale === "ja" ? "学年" : "Academic Year";

  const listWithAnd = (items: string[]) => {
    if (!items || items.length === 0) return "";
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} and ${items[1]}`;
    return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
  };

  return (
    <SpotlightCard className="flex items-start gap-5 p-6">
      {logo ? (
        <Image
          width={60}
          height={60}
          src={logo}
          alt={institution}
          className="rounded-lg border-[1.5px] border-neutral-800 bg-neutral-100 dark:border-neutral-300"
        />
      ) : (
        <AcademicIcon size={65} />
      )}

      <div className="space-y-1">
        <h5>{course}</h5>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-2 md:flex-row">
            {link ? (
              <Link href={link} target="_blank">
                <span className="cursor-pointer hover:text-neutral-900 hover:underline hover:dark:text-neutral-50">
                  {institution}
                </span>
              </Link>
            ) : (
              <span className="hover:text-neutral-900 hover:dark:text-neutral-50">{institution}</span>
            )}
            {location && (
              <>
                <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">•</span>
                <span>{location}</span>
              </>
            )}
          </div>

          <div className="flex flex-col gap-2 text-[13px] md:flex-row">
            <div className="flex gap-1 text-neutral-600 dark:text-neutral-400">
              <span>
                {ayLabel} {listWithAnd(academicYears)}
              </span>
            </div>

            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">•</span>
            <span className="text-neutral-600 dark:text-neutral-400">{role}</span>

            {location_type && (
              <>
                <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">•</span>
                <span className="text-neutral-600 dark:text-neutral-400">{location_type}</span>
              </>
            )}
          </div>

          {responsibilities != null && (
            <>
              <button
                onClick={() => setIsShowResponsibility(!isShowResponsibility)}
                className="-ml-1 flex items-center justify-center gap-x-1 transition duration-300 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300"
              >
                <ChevronIcon
                  size={18}
                  className={clsx({
                    "rotate-90 transition-all duration-300": isShowResponsibility,
                  })}
                />
                <p className="text-sm">
                  {isShowResponsibility ? hideText : showText} {responsibilityText}
                </p>
              </button>
              <AnimatePresence>
                {isShowResponsibility && (
                  <motion.ul
                    className="ml-[18px] list-disc space-y-1 pb-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {responsibilities?.map((responsibility, index) => (
                      <motion.li key={index} layout>
                        {responsibility}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
};

export default AcademicCard;
