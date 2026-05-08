import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProgramDetail.css';

function ProgramDetail() {
  const { slug } = useParams();

  return (
    <div className="program-detail-page">
      <section className="card program-card p-4 mb-3">
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
          <div className="program-left">
            <h3 className="program-title">Summer Research Internship in Biomedical Sciences</h3>

            <div className="program-meta">
              <span className="school">Stanford University School of Medicine</span>
              <a href="https://www.stanford.edu" target="_blank" rel="noopener noreferrer" className="visit-link">Visit Website</a>
            </div>
          </div>

          <div className="program-status">
            <span className="status-badge">Applications Open</span>
          </div>
        </div>
      </section>

      <div className="row">
        <div className="col-md-8">
          <section className="card p-4 program-info">
            <h6 className="section-title">Program Information</h6>

            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Primary Category</strong>
                <p>Research and Science</p>
              </div>
              <div className="col-md-6">
                <strong>Sub-Category</strong>
                <p>Biomedical Research</p>
              </div>
            </div>

            <div className="mb-3">
              <strong>Program Tags</strong>
              <br />
              <span className="tag">Internship</span>
              <span className="tag">Paid Position</span>
              <span className="tag">Mentorship</span>
              <span className="tag">College Credit</span>
            </div>

            <div className="mb-3">
              <strong>Eligibility</strong>
              <p>
                Rising college sophomores, juniors, and seniors interested in biomedical
                research careers.
              </p>
            </div>

            <div className="mb-3">
              <strong>Program Dates</strong>
              <p>June 15, 2026 - August 22, 2026</p>
            </div>

            <div className="mb-3">
              <strong>Cost</strong>
              <div className="stipend-box mb-3 mt-2">
                <strong>$5,500 Stipend</strong>
                <br />
                Housing and meal allowance provided
              </div>
            </div>

            <div>
              <strong>Program Notes</strong>
              <p>
                This route demo is converted from the source template in ThietKelayout-main and
                mapped into React components and routes.
              </p>
            </div>
          </section>
        </div>

        <div className="col-md-4">
          <aside className="card p-4 unlock-box sticky-panel">
            <h5 className="mb-3">Unlock Full Features</h5>
            <p>
              Sign up to access application tools, tracking, and personalized features.
            </p>
            <button className="btn btn-primary w-100 mb-2">Sign up to save program</button>
            <button className="btn btn-outline-secondary w-100">Browse more programs</button>
            <hr />
            <p className="small text-muted mb-0">Current route slug: {slug}</p>
            <Link className="btn btn-link px-0 mt-2" to="/">
              Back to home
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetail;
