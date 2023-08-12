export function fetchAnswers() {
    return fetch('/answers', { method: 'GET' })
}

export function fetchProblem() {
    return fetch('/problem', { method: 'GET' })
}

export function checkAnswer(id: number, algo: string) {
    return fetch('/check', {
        method: 'POST',
        body: JSON.stringify({ id, algo })
    })
}