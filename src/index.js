import React , { useState } from 'react';
import ReactDOM from 'react-dom';

/*const Header = (head) => {
  return(
    <>
    <h1>{head.course}</h1>
    </>
  )
}

//1.1 , 1.2
const Part = (par) => {
  return(
    <>
    <p>{par.name} {par.exercise}</p>
    </>
    //in content
    <Part part={prop.name} exercise={prop.exercises}/>
  )
}

const Content = (prop) => {
  return(
    <>
     <p>{prop.parts[0].name} {prop.parts[0].exercises}</p>
     <p>{prop.parts[1].name} {prop.parts[1].exercises}</p>
     <p>{prop.parts[2].name} {prop.parts[2].exercises}</p>
    
    </>
  )
}

const Total = (tot) => {
  return(
    <>
    <p>Number of exercises {tot.parts[0].exercises + tot.parts[1].exercises + tot.parts[2].exercises}</p>
    </>
  )
}

//1.1 , 1.2
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

//1.3 and 1.4 and 1.5
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}*/


 //1.9
const Statistics = (props) =>{

  if((props.good + props.neutral + props.bad) === 0)
  {
    return (
      <>No feedback given</>
    )
  }

  return (
    <>
      <br/>
      good {props.good}
      <br/>
      neutral {props.neutral}
      <br/>
      bad {props.bad}
      <br/>
      all {props.good + props.neutral + props.bad}
      <br/>
      average {(props.good*1 + props.neutral*0 + props.bad*-1) / (props.good+props.neutral+props.bad)}
      <br/>
      positive {(props.good / (props.good+props.bad+ props.neutral))*100}%
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback </h1>
      <br/>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <br/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();