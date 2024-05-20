import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'About Page',
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  )
}