'use client';
import { useParams, useSearchParams } from 'next/navigation';
import {ProjectPage} from "../../components/projectPage";
import {FourOFour} from "../../components/fourofour";

const ProjectsPage = () => {
  const slug = (useParams()?? "") as string; // Retrieve the dynamic segment from the URL
  const searchParams = useSearchParams();
  var index = searchParams?.get('index') || -1;
  index = Number(index);
  const page = "projects";
  if (page == undefined || index == -1){
    return (<FourOFour/>)
  }

  return (
    <div>
      <ProjectPage page={page} index={index} slug={slug}/>
    </div>
  );
};

export default ProjectsPage;
