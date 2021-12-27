import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "./Spinner.js";
import Footer from "./Footer";
import ProjectItems from "./ProjectIems";

import { getProjects } from "../redux/work/workThunk";

const Work = () => {
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state.work);

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <main id="work">
            <h1 className="lg-heading">
              My
              <span className="text-secondary">Work</span>
            </h1>
            <h2 className="sm-heading">Check out some of my projects...</h2>
            <div className="projects">
              {projects && projects.length > 0 ? (
                projects.map((project) => (
                  <ProjectItems key={project._id} project={project} />
                ))
              ) : (
                <h4>No Projects Completed yet...</h4>
              )}
            </div>
          </main>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Work;
