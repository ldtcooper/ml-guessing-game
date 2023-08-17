export type Nullable<T> = T | null;

export interface ProblemResponse {
    graph: Object,
    id: number
}
export interface CheckResponse {
    correct: boolean,
    algo: string
}

export interface CheckBody {
    id: number,
    algo: string,
}

export interface DeleteResponse {
    deleted: number
}
