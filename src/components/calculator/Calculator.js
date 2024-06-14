const useCalculator = (counterValue) => {
    const [counter, setCounter] = React.useState(counterValue); 
    
        const incCounter = () => {
        if (counter < 50) {
          setCounter(counter => counter + 1)
        }
      }
  
      const decCounter = () => {
        if (counter > -50) {
          setCounter(counter => counter - 1)
        }
      }
  
      const rndCounter = () => {
        fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
        .then(result => result.json())
        .then(data => {
          console.log('ok');
          setCounter(data);
        })
        .catch(()=>{
          console.log('error');
          setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
        })
      }
  
      const resetCounter = () => {
        setCounter(counterValue)
      }
      
      return { counter, incCounter, decCounter, rndCounter, resetCounter }
  }
  
  const Counter = (props) => {
    const { counter, incCounter, decCounter, rndCounter, resetCounter } = useCalculator(props.counter);
      
      return (
        <div className="component">
          <div className="counter">{counter}</div>
          <div className="controls">
            <button onClick={incCounter}>INC</button>
            <button onClick={decCounter}>DEC</button>
            <button onClick={rndCounter}>RND</button>
            <button onClick={resetCounter}>RESET</button>
          </div>
        </div>
      )
  }
  
  const RndCounter = (props) => {
      const { counter, rndCounter, resetCounter } = useCalculator(props.counter);
  
      return (
        <div className="component">
          <div className="counter">{counter}</div>
          <div className="controls">
            <button onClick={rndCounter}>RND</button>
            <button onClick={resetCounter}>RESET</button>
          </div>
        </div>
      )
  }

//Кастомні хуки допомогають покращити код у компонентах, винести окремі дії зі стейтом, або ефектами в окрему функцію. У прикладі више завдяки кастомному хуку ми винесли оголошення стейту та методи у окремий хук і таким чином змогли виконати певну інкапсуляцію елементів, де є звичайний калькулятор, а є обмежений, який використовує тільки певні функції