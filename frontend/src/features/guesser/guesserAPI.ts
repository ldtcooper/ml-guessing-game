import { CheckResponse, ProblemResponse } from "../../app/types";

async function callApi<T>(url: string, body: Object): Promise<T> {
    try {
        const response = await fetch(url, body);

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data: T = await response.json();
        return data;
    } catch (error: any) {
        throw new Error('API request failed: ' + error.message);
    }
}

export function fetchAnswers(): Promise<Array<string>> {
    return callApi('/answers', { method: 'GET' })
}

export function fetchProblem(): Promise<ProblemResponse> {
    return callApi('/problem', { method: 'GET' })
}

export function checkAnswer(id: number, algo: string): Promise<CheckResponse> {
    return callApi('/check', {
        method: 'POST',
        body: JSON.stringify({ id, algo }),
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export function deleteGame(id: number): Promise<number> {
    return callApi('/delete', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: {
            "Content-Type": "application/json",
        }
    })
}