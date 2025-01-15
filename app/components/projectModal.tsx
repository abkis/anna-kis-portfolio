import { Modal, Box } from '@material-ui/core';
import { Project } from "../../types/types";
import Link from "next/link";
import "../../global.css";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const ProjectModal = ({ open, closeModal, project} : {open : any, closeModal : any, project : Project}) => {
  return (
    <Modal
      open={open}
      onClose={closeModal}
      closeAfterTransition
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(6px)", // Blur the background
        backgroundColor: "rgba(0, 0, 0, 0.5)", // dimmed effect, optional
      }}
    >
      <Box
        style={{
          position: "relative",
          width: "55%",
          height: "55%",
          backgroundColor: "white", // Ensure the modal content has a background
          borderRadius: "12px",
          boxShadow: "24",
          padding: "2", // padding inside the box
          outline: "none", // Remove focus outline
        }}
      >
        <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs duration-1000 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange" style={{color: "var(--text-color)"}}>
                {project.start ? (
                  <div>
                    <time dateTime={new Date(project.start).toISOString()}>
                      {new Date(project.start).getFullYear()}/
                      {(new Date(project.start).getMonth() + 1).toString().padStart(2, '0')}
                    </time>
                    {" – "}
                    {project.end ? (
                      <time dateTime={new Date(project.end).toISOString()}>
                        {new Date(project.end).getFullYear()}/
                        {(new Date(project.end).getMonth() + 1).toString().padStart(2, '0')}
                      </time>
                      ) : (
                      <span>ongoing</span>
                      )}
                  </div>
                  ) : (
                  <span>SOON</span>
                  )}

                </div>
              </div>
              <Link href={project.slug.startsWith("http") ? project.slug : `/projects/${project.slug}`}>
              <h2
                id="project-post"
                className="mt-4 text-3xl font-bold group-hover:text-white sm:text-4xl font-display"
                style={{color: "var(--text-color)"}}
              >
                {project.name}
              </h2>
              <p className="mt-4 leading-8 duration-150 group-hover:text-zinc-300"
              style={{color: "var(--sub-text-color)"}}>
                {project.content}
              </p>
              <div className="absolute bottom-4 md:bottom-8">
                <p className="hidden hover:text-zinc-50 lg:block" style={{color: "var(--sub-text-color)"}}>
                  Read more <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
              </Link>

              <div className="absolute bottom-4 right-4 md:bottom-15 md:right-8">
                {
                  project.filename ?
                
                (<Button
                  className="text-[var(--sub-text-color)] hover:text-[var(--hover-color)]"
                >
                  <a href={`/project_files/${project.filename}.pdf`} download={`${project.filename}.pdf`}>
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                  </a>
                </Button>) : null   
                }             
                </div>
            </article>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
