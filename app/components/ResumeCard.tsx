import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({
  resume: { id, jobTitle, companyName, feedback, imagePath },
}: {
  resume: Resume;
}) => {
  return (
    <Link
      to={`/resume/${id}`}
      className="resume-card animate-in fade-in duration-1000 
                 w-full block rounded-2xl shadow-md bg-white overflow-hidden h-[350px]"
    >
      {/* Card Header */}
      <div className="resume-card-header flex items-center justify-between p-3">
        <div className="flex flex-col gap-1">
          {companyName && (
            <h2 className="!text-black font-bold text-base truncate">
              {companyName}
            </h2>
          )}
          {jobTitle && (
            <h3 className="text-sm text-gray-500 break-words">{jobTitle}</h3>
          )}
          {!companyName && !jobTitle && (
            <h2 className="!text-black font-bold text-base">Resume</h2>
          )}
        </div>
        <div className="flex-shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>

      {/* Preview Image */}
      <div className="gradient-border animate-in fade-in duration-1000 mb-3">
        <div className="w-full h-[180px]">
          {" "}
          {/* increased height */}
          <img
            src={imagePath}
            alt="resume"
            className="w-full h-full object-cover object-top rounded-b-2xl"
          />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
