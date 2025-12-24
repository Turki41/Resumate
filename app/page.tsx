import Navbar from "@/components/Navbar";
import ResumeCard from "@/components/ResumeCard";
import { resumes } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (

    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading pb-1">
          <h1 className="pb-1 ">Land Your Dream Job with AI-Powered Feedback</h1>
          <h2>Turn Your Resume Into a Job Magnet</h2>
        </div>

        <Link className="btn-primary w-fit mb-14 font-semibold text-xl px-5 flex items-center justify-center gap-2 group" href={'/upload'}>
        <p>Review your resume now</p>
        <ArrowRight className="size-5.5 mt-1 group-hover:translate-x-1 transition-all"/>
        </Link>
      </section>
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume}/>
          ))}
        </div>
      )}
    </main>
  );
}
