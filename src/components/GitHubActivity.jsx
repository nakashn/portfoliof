import React, {useEffect, useState} from 'react';
import {Github, Star, GitFork, ExternalLink} from 'lucide-react';
import SectionHeading from './SectionHeading';
import {projects} from '../data/portfolio';

let repositoryRequest;
function loadRepositories() {
 if (!repositoryRequest) {
  repositoryRequest = fetch('https://api.github.com/users/nakashn/repos?per_page=100&sort=updated', {headers:{Accept:'application/vnd.github+json'},signal:AbortSignal.timeout(10000)})
   .then(response => {if (!response.ok) throw new Error('GitHub unavailable'); return response.json();})
   .then(data => {
    if (!Array.isArray(data)) throw new Error('Invalid GitHub response');
    const selected = new Set(projects.map(project => project.url.toLowerCase()));
    return data.filter(repo => !repo.private && selected.has(repo.html_url?.toLowerCase())).slice(0, 4);
   });
 }
 return repositoryRequest;
}
export default function GitHubActivity() {
 const [state, setState] = useState({loading:true, repos:[], error:false});
 useEffect(() => {
  let active = true;
  loadRepositories().then(repos => {if (active) setState({loading:false, repos, error:false});})
   .catch(() => {if (active) setState({loading:false, repos:[], error:true});});
  return () => {active = false;};
 }, []);
 return <section className="section github-activity" aria-labelledby="github-activity-title">
  <SectionHeading eyebrow="ON GITHUB" title={<span id="github-activity-title">Code &amp; activity</span>}>Explore the code behind my projects.</SectionHeading>
  <div className="github-results" aria-busy={state.loading}>
   {state.loading ? <p className="github-status" role="status">Loading public repositories…</p> : state.repos.length ?
    <div className="project-grid">{state.repos.map(repo => <article className="project-card" key={repo.id}>
     <div className="project-content">
      <div className="project-title"><h3><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h3><Github size={18} aria-hidden="true"/></div>
      {repo.description && <p>{repo.description}</p>}
      <div className="github-repo-meta">
       {repo.language && <span>{repo.language}</span>}
       {Number.isFinite(repo.stargazers_count) && <span><Star size={14} aria-hidden="true"/>{repo.stargazers_count} stars</span>}
       {Number.isFinite(repo.forks_count) && <span><GitFork size={14} aria-hidden="true"/>{repo.forks_count} forks</span>}
      </div>
     </div>
    </article>)}</div> : <p className="github-status" role="status">{state.error ? 'GitHub activity is temporarily unavailable.' : 'Explore my public repositories on GitHub.'}</p>}
  </div>
  <a className="all-projects" href="https://github.com/nakashn" target="_blank" rel="noreferrer"><Github size={16}/> Visit my GitHub <ExternalLink size={15}/></a>
 </section>;
}
