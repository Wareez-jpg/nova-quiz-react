import { useState } from 'react'

function StartScreen() {
    const [subject, setSubject] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [numQuestions, setNumQuestions] = useState('')

    function handleStartQuiz() {
        if (subject === '' || difficulty === '' || numQuestions === '') {
            alert('Please select a subject, difficulty, and number of questions.')
            return
        }

        console.log('Starting quiz with:', subject, difficulty, numQuestions)
    }

    return (
        <div className="start-screen">
            <h1>Nova Quiz</h1>

            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option value="">Select a Sbject</option>
                <option value="science">Science</option>
                <option value="computer-science">Computer Science</option>
                <option value="mathematics">Mathematics</option>
                <option value="geography">Geography</option>
                <option value="history">History</option>
            </select>
            <p>You selcted: {subject}</p>

            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="">Select Difficulty</option>
                <option value="hard">Hard</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <p>Difficulty: {difficulty}</p>

            <select value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)}>
                <option value="">Select Number of Questions</option>
                <option value="10">10 Questions</option>
                <option value="20">20 Questions</option>
                <option value="50">50 Questions</option> 
            </select>
            <p>Number of Questions: {numQuestions}</p>

            <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
    )
}

export default StartScreen