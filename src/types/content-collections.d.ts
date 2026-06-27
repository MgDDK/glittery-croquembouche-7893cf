declare module 'content-collections' {
  type Meta = {
    path: string
    filePath: string
    directory: string
    extension: string
  }

  export type Job = {
    _meta: Meta
    jobTitle: string
    summary: string
    startDate: string
    endDate?: string
    company: string
    location: string
    tags: Array<string>
    content: string
  }

  export type Education = {
    _meta: Meta
    school: string
    summary: string
    startDate: string
    endDate?: string
    tags: Array<string>
    content: string
  }

  export type Blog = {
    _meta: Meta
    title: string
    date: string
    summary: string
    tags: Array<string>
    author: string
    content: string
  }

  export type Project = {
    _meta: Meta
    title: string
    description: string
    tags: Array<string>
    github?: string
    liveUrl?: string
    image?: string
    content: string
  }

  export const allJobs: Array<Job>
  export const allEducations: Array<Education>
  export const allBlogs: Array<Blog>
  export const allProjects: Array<Project>
}
