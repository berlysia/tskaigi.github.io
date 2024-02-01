import React from "react";
import { IconType } from "react-icons";

export type PageInfo = {
  index: number;
  title: string;
  description?: string;
  metaImage?: string;
  icon: IconType;
  href: string;
};

type Question = {
  id: number;
  question: React.ReactNode;
  answer: React.ReactNode;
};

type QACategory = {
  id: number;
  name: string;
  questions: Question[];
};

export type QandA = {
  categories: QACategory[];
};

export type CardData = {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  links: { icon?: IconType; href: string }[];
};
