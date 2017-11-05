// @flow
interface UnserializedRepoAttributes {
  contributors_url: string;
  created_at: string;
  description: string;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_url: string;
  has_issues: boolean;
  has_pages: boolean;
  homepage: string;
  html_url: string;
  id: number;
  issues_url: string;
  language: string;
  name: string;
  open_issues: number;
  open_issues_count: number;
  stargazers_count: number;
  updated_at: string;
  url: string;
  watchers: number;
  watchers_count: number;
}

export default class Repo {
  contributorsUrl: string;
  createdAt: string;
  description: string;
  forks: number;
  forksCount: number;
  forksUrl: string;
  fullName: string;
  gitUrl: string;
  hasIssues: boolean;
  hasPages: boolean;
  homepage: string;
  htmlUrl: string;
  id: number;
  issuesUrl: string;
  language: string;
  name: string;
  openIssues: number;
  openIssuesCount: number;
  stargazersCount: number;
  updatedAt: string;
  url: string;
  watchers: number;
  watchersCount: number;

  constructor(data: UnserializedRepoAttributes) {
    this.contributorsUrl = data.contributors_url;
    this.createdAt = data.created_at;
    this.description = data.description;
    this.forks = data.forks;
    this.forksCount = data.forks_count;
    this.forksUrl = data.forks_url;
    this.fullName = data.full_name;
    this.gitUrl = data.git_url;
    this.hasIssues = data.has_issues;
    this.hasPages = data.has_pages;
    this.homepage = data.homepage;
    this.htmlUrl = data.html_url;
    this.id = data.id;
    this.issuesUrl = data.issues_url;
    this.language = data.language;
    this.name = data.name;
    this.openIssues = data.open_issues;
    this.openIssuesCount = data.open_issues_count;
    this.stargazersCount = data.stargazers_count;
    this.updatedAt = data.updated_at;
    this.url = data.url;
    this.watchers = data.watchers;
    this.watchersCount = data.watchers_count;
  }
}
