import React from "react";
import Typical from 'react-typical';
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          <div className="colz-icon">

            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          </div>

          <div className="profile-details-name">
              <span className="primary-text">
                {''}
                This is <span className="highlighted-text">Etech</span>
              </span>
          </div>
          <div className="profile-detail-role">
            <span>
                {''}
                <h1>
                    <Typical
                        loop={Infinity}
                        steps={[
                            'Ethusiastic Dev',
                            1000,
                            'MERN stack',
                            1000,
                            'MEAN stack',
                            1000,
                            'Blockchain',
                            1000,
                            'Node JS',
                            1000,
                        ]}
                    />
                </h1>
                <span className="profile-role-tagline">
                    Knack of building applications with front and back end operations.
                </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
                {""}
                Hire Us{""}
            </button>
            <a href="Policy.pdf" download="Policy.pdf">
                <button className="btn highlighted-btn">Our Policy</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
};
