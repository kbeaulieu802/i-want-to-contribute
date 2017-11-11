// @flow
import RepoSerializer from '../serializers/RepoSerializer';

interface RepoAttributes {
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

  constructor(data: RepoAttributes) {
    Object.assign(this, data)
  }
}
