import React from "react";

interface ITourInfoProps {
  summary?: string;
  description?: string;
  
}

function Summary({summary , description  }: ITourInfoProps) {
  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col gap-2">
        <span className="font-medium text-xl text-primary">Tour Summary</span>
        <span className="text-foreground/50">{summary}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium text-xl text-primary">Tour Description</span>
        <span className="text-foreground/50">{description}</span>
      </div>
    </div>
  );
}

export default Summary;
