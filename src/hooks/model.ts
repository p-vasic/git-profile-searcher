export interface GitError {
    active?: boolean
    type?: number
}

export interface User {
    id: number
    login: string
    avatar_url: string
    html_url: string
    created_at: string
    public_repos: number
    followers: number
    following: number
}

export interface Repo {
    id: number
    name: string
    html_url: string
}