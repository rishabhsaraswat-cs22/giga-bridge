import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Logic", "Hybrid Text Making Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which of these is NOT a JavaScript framework/library?", 
      options: ["React", "Angular", "Django", "Vue"],
      correctAnswer: "Django"
    },
    {
      question: "What is the purpose of a RESTful API?",
      options: ["Database storage", "Client-server communication", "Frontend styling", "Code compilation"],
      correctAnswer: "Client-server communication"
    },
    {
      question: "Which database is NoSQL?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      correctAnswer: "MongoDB"
    },
    {
      question: "What is the role of middleware in Express.js?",
      options: ["Handle database queries", "Process requests before routes", "Create frontend components", "Manage deployment"],
      correctAnswer: "Process requests before routes"
    },
    {
      question: "Which HTTP method is used to update data?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: "PUT"
    },
    {
      question: "What is the purpose of useState in React?",
      options: ["Routing", "State management", "API calls", "Form validation"],
      correctAnswer: "State management"
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style System", "Creative Style Solution", "Client Server Script"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which tool is used for version control?",
      options: ["Node.js", "Git", "Docker", "Kubernetes"],
      correctAnswer: "Git"
    },
    {
      question: "What is the purpose of JWT?",
      options: ["User Authentication", "Database Indexing", "Server Deployment", "Code Optimization"],
      correctAnswer: "User Authentication"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(''));
  const [score, setScore] = useState(null);
  const [timer, setTimer] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer === 0) {
      nextQuestion();
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswerChange = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(8);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (q.correctAnswer === userAnswers[index]) {
        correctCount++;
      }
    });
    setScore(correctCount * 10);
  };

  const handleDashboardRedirect = () => {
    navigate(`/dashboard/freelancer/${id}`, { state: { score: score } });
  };

  // Enhanced inline styles
  const styles = {
    quizContainer: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '12px',
      backgroundColor: '#f0f8ff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    options: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    optionButton: (isSelected) => ({
      padding: '12px',
      margin: '6px 0',
      border: 'none',
      borderRadius: '6px',
      backgroundColor: isSelected ? '#4caf50' : '#e0e0e0',
      color: isSelected ? 'white' : 'black',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      ':hover': {
        backgroundColor: isSelected ? '#45a049' : '#d5d5d5',
        transform: 'scale(1.02)',
      },
    }),
    button: {
      padding: '12px 24px',
      border: 'none',
      borderRadius: '6px',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      ':hover': {
        backgroundColor: '#0056b3',
        transform: 'scale(1.02)',
      },
    },
    timer: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#ff4500',
    },
  };

  return (
    <div style={styles.quizContainer}>
      {score === null ? (
        <div>
          <p>{questions[currentQuestionIndex].question}</p>
          <div style={styles.options}>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                style={styles.optionButton(userAnswers[currentQuestionIndex] === option)}
                onClick={() => handleAnswerChange(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p style={styles.timer}>Time left: {timer} seconds</p>
          <button style={styles.button} onClick={nextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <p>Correct Answers: {score / 10}</p>
          <p>Wrong Answers: {10 - score / 10}</p>
          <p>Score: {score} / 100</p>
          <button 
            style={{...styles.button, marginTop: '20px'}} 
            onClick={handleDashboardRedirect}
          >
            Return to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;