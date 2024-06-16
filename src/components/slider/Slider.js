import { useCallback, useEffect, useMemo, useReducer, useState} from 'react';
import {Container} from 'react-bootstrap';
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


export const Slider = (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, dispatch] = useReducer(reducer, {autoplay: false});

    function reducer(state, action) {
        switch(action.type) {
            case 'toggle':
                return { autoplay: !state.autoplay }
            case 'slow':
                return { autoplay: 'slow' }
            case 'medium':
                return { autoplay: 'medium'}
            case 'off':
                return { autoplay: false}
            case 'custom':
                return { autoplay: action.payload }
            default:
                throw new Error('Wrong action type on Slider');
        }
    }

    // useEffect(()=>{
    //     console.log('starts always')
    // });

    // useEffect(()=>{
    //     console.log('mounting');
    //     fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(result => result.json()).then(data => { result = data; console.log(data) }).catch(error => console.error(error));
    //     return () => {
    //         console.log('unmounting')
    //     }
    // },[]);

    // useEffect(()=>{
    //     console.log('starts only on changing slide state')
    // }, [slide]);

    // useEffect(()=>{
    //     console.log('starts only on changing autoplay state');
    // }, [autoplay]);

    const changeSlide = useCallback((i) => {
        setSlide(slide => slide + i);
    }, []); 

    // const toggleAutoplay = useCallback(() => {
    //     setAutoplay(autoplay => !autoplay)
    // }, []);

    const result = useMemo((slide) => ('Supper storng calculation'), [slide]);

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/> 
                <p>{ typeof(autoplay.autoplay) === 'boolean' ? autoplay.autoplay.toString() : autoplay.autoplay }</p>
                </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1
                    </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1
                    </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={()=>{dispatch({type: 'toggle'})}}>toggle autoplay
                    </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={()=>{dispatch({type: 'off'})}}>off autoplay
                    </button> 
                    <button 
                        className="btn btn-primary me-2"
                        onClick={()=>{dispatch({type: 'medium'})}}>medium autoplay
                    </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={()=>{dispatch({type: 'slow'})}}>slow autoplay
                    </button>
                    <input 
                    placeholder='Input slider speed'
                    onChange={(e)=>{dispatch({type: 'custom', payload: e.target.value})}}/>
                </div>
            </div>
        </Container>
    )
}

//Hooks - це можливість інтегрувати можливості класових компонентів у функціональні - такі як стейт, та його оновлення, втручання у життєвий цикл компоненту на певних етапах. По суті це функції

//Хук для роботи зі стейтом - useState() - Він приймає значення, яке буде записано з самого початку у стейт, повертає масив з самим стейтом, та функцією, яка може його міняти. Завдяки деструктуризації, можна дістати ці значення по окремим змінним та звертатись до змінних. Тут так само працює правило іммутабельності стейту - не можна напряму змінювати значення змінної, треба керувати значенням через фунцію. У функцій, які оновлюють стейт так само є правило асинхроності. Якщо зміна стейту не потребує поточного значення цього стейту, то можна у функцію передати просто значення, на яке потрібно оновити. Якщо потребує поточного значення, то для забеспечення послідовності, треба передати функцію, яка повертатиме потрібне значення.

//Effects - це ті хуки, що викликаються у певні моменти життєвого циклу компоненту, але для функціональних копонентів - він об'єднаний в один - useEffects() - у нього передається функція, яка буде виконуватись. Сам по собі ефект буде викликатись при кожному оновленні, монтуванні та демонтуванні елементу. Але це можна змінити, додавши другим аргументом масив "залежностей". У масив слід передавати ті змінні, на зміні яких буде викликатись функція. При передачі масиву - зникає властивість того, що ефект буде викликатись на монтуванні. Якщо треба, щоби ефект викликався тільки на монтуванні, можна передати порожній масив залежностей. Для того, щоби виконати якусь функцію при демонтуванні компоненту, треба у фунції, яка передається у useEffects() повертати іншу функцію. Ця функція, що повертається - буде виконана після демонтування компоненту.

//useCallback, useMemo - при роботі з фунціональними компонентами - варто пам'ятати, що ці компоненти все одно є функціями та при кожному рендері всі ті функції та змінні, що оголошувались у компоненті - їх екземляри заново створюються і якщо ці екземляри передаються, як пропси у дочірні компоненти, то вони можуть викликати зайві перерендери дочірніх компонентів. Для цього треба використовувати useCallBack - для функцій - дозволяє запам'ятати екземляр функції в компоненті, не перестворювати її при кожному перерендері. Якщо функція не передається як пропс у дочірні компоненти - це ще не критично, операція по створенюю функції не так вже і навантажує, але якщо екземляр функції передається у дочірній компонент, то це буде викликати перерендер, бо це вже важається новими даними. Також useMemo треба використовувати для результатів важких фунцій, які можуть використовувати багато ресурсів для обчислень. Так варто робити, щоби так само, не викликати важкі обчислення кожен раз при рендері. А запам'ятовувати результати цих очислень та запускати їх тільки тоді, коли змінюються агрументи функції. Так, для useCallBack та useMemo так само можна внести "залежності", які будуть перестворювати функцію, або запускати обчислення у випадку, якщо ці "залежності" зміняться

//useRef - як і слідує з назви - завдяки цьому хуку, як і в класових компонентах можна отримати DOM елемент з реакт елементу. Але у функціональних компонентах цей хук має значно ширше застосування. Завдяки ньому можна зберігати значення певних змінних між рендерами і ці зміни не будуть викликати перерендер. По суті, таким чином, ми можемо отримати аналог this з класів - можливість зберігати значення змінних напротязі усього життєвого циклу компонента. Також його можна використати для зберігання минулого значення певного стейту. Наприклад записувати їх у певну змінну з useRef.