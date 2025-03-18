import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export type ButtonProps = {
    children: ReactNode;
    href: string;
};

export type CardProps = {
    children: ReactNode;
    className?: string;
};

export type FlipCardProps = {
    frontTitle?: string;
    frontContent: React.ReactNode;
    backTitle: string;
    backContent: React.ReactNode;
    icon: IconProp;
    frontBg?: string;
    backBg?: string;
    frontTextColor?: string;
    backTextColor?: string;
};

export type FooterNavItem = {
    href: string;
    name: string;
};

export type FooterNav = {
    label: string;
    items: FooterNavItem[];
};
export type HeaderProps = {
    children: ReactNode;
    title: string;
  }
  
export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    imageSrc?: string;
    attributes?: React.ReactNode;
};

export type SwiperComponentProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    onImageClick?: (item: T) => void;
};