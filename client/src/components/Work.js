import React from "react";

import Spinner from "./Spinner";
import Footer from "./Footer";
import ProjectItems from "./ProjectIems";
import { useFetchProjectsQuery } from "../redux/work/workSlicer";

const Work = () => {
  const { data, isLoading, isFetching } = useFetchProjectsQuery();
  return (
    <>
      {isLoading || isFetching ? (
        <Spinner />
      ) : (
        <>
          <main id="work">
            <h1 className="lg-heading">
              My
              <span className="text-secondary">Work</span>
            </h1>
            <h2 className="sm-heading">Check out some of my projects...</h2>
            <div className="projects">
              {data && data.length > 0 ? (
                data.map((project) => (
                  <ProjectItems key={project._id} project={project} />
                ))
              ) : (
                <h4>No Projects Completed yet...</h4>
              )}
            </div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Work;
