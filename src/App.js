import { useState } from 'react';

function App() {
  const [lessonPlan, setLessonPlan] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/api/getLessonPlan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gradeLevel: '1st grade',
        topic: 'Math'
      })
    })
    .then(response => response.json())
    .then(data => setLessonPlan(data))
    .catch(error => console.error(error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Grade level:
          <input type="text" name="gradeLevel" />
        </label>
        <br />
        <label>
          Topic:
          <input type="text" name="topic" />
        </label>
        <br />
        <button type="submit">Generate Lesson Plan</button>
      </form>

      {lessonPlan && (
        <div>
          <h2>Lesson Plan:</h2>
          <p>{lessonPlan}</p>
        </div>
      )}
    </div>
  );
}

export default App;
