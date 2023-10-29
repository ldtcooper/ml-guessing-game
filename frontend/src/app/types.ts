export type Nullable<T> = T | null;

export interface ProblemResponse {
    graph: Object,
    id: number
}
export interface CheckResponse {
    correct: boolean,
    answer: string
}

export interface CheckBody {
    id: number,
    algo: string,
}

export interface DeleteResponse {
    deleted: number
}

export interface DeleteBody {
    id: number,
}

export interface Explanations {
    [key: string]: string;
}