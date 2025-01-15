'use client';
import {Project} from 'types/types';
import { useParams, useSearchParams } from 'next/navigation';


const ProjectPage = () => {
  const slug = (useParams()?? "") as string; // Retrieve the dynamic segment from the URL

  return (
    <div>
      <h1>Hi there</h1>
    </div>
  );
};

export default ProjectPage;
