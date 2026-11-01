import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Github, X } from 'lucide-react';

export default function ProjectDetailsModal({ project, onClose }) {
  const dialog = useRef(null);
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbar)
      document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + scrollbar}px`;
    const element = dialog.current;
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);
  useEffect(() => {
    if (!closing) return;
    const timer = window.setTimeout(
      onClose,
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 160
    );
    return () => window.clearTimeout(timer);
  }, [closing, onClose]);
  function dismiss() {
    setClosing(true);
  }
  return createPortal(
    <dialog
      ref={dialog}
      className={`project-dialog${closing ? ' is-closing' : ''}`}
      aria-labelledby="project-details-title"
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        )
          dismiss();
      }}
    >
      <div className="project-dialog-heading">
        <h2 id="project-details-title">{project.title}</h2>
        <button
          type="button"
          className="dialog-close"
          onClick={dismiss}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>
      </div>
      {project.image && (
        <img
          className="project-dialog-image"
          src={project.image}
          alt={`${project.title} project screenshot`}
        />
      )}
      <p className="project-dialog-description">{project.desc}</p>
      {project.features?.length > 0 && (
        <>
          <h3>Key features</h3>
          <ul className="project-dialog-features">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </>
      )}
      <h3>Technologies</h3>
      <div className="stack">
        {project.stack.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <a
        className="secondary-btn"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        <Github size={16} /> View on GitHub
      </a>
    </dialog>,
    document.body
  );
}
