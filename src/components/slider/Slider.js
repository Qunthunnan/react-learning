import userEvent from '@testing-library/user-event';
import {Component, useEffect, useState} from 'react';
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
    const [autoplay, setAutoplay] = useState(false);
    const [active, seActive] = useState(0);

    let result;


    useEffect(()=>{
        console.log('starts always')
    });

    useEffect(()=>{
        console.log('mounting');
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(result => result.json()).then(data => { result = data; console.log(data) }).catch(error => console.error(error));
        return () => {
            console.log('unmounting')
        }
    },[]);

    useEffect(()=>{
        console.log('starts only on changing slide state')
    }, [slide]);

    useEffect(()=>{
        console.log('starts only on changing autoplay state');
    }, [autoplay]);

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay)
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

//Hooks - це можливість інтегрувати можливості класових компонентів у функціональні - такі як стейт, та його оновлення, втручання у життєвий цикл компоненту на певних етапах. По суті це функції
//Хук для роботи зі стейтом - useState() - Він приймає значення, яке буде записано з самого початку у стейт, повертає масив з самим стейтом, та функцією, яка може його міняти. Завдяки деструктуризації, можна дістати ці значення по окремим змінним та звертатись до змінних. Тут так само працює правило іммутабельності стейту - не можна напряму змінювати значення змінної, треба керувати значенням через фунцію. У функцій, які оновлюють стейт так само є правило асинхроності. Якщо зміна стейту не потребує поточного значення цього стейту, то можна у функцію передати просто значення, на яке потрібно оновити. Якщо потребує поточного значення, то для забеспечення послідовності, треба передати функцію, яка повертатиме потрібне значення.
//Effects - це ті хуки, що викликаються у певні моменти життєвого циклу компоненту, але для функціональних копонентів - він об'єднаний в один - useEffects() - у нього передається функція, яка буде виконуватись. Сам по собі ефект буде викликатись при кожному оновленні, монтуванні та демонтуванні елементу. Але це можна змінити, додавши другим аргументом масив "залежностей". У масив слід передавати ті змінні, на зміні яких буде викликатись функція. При передачі масиву - зникає властивість того, що ефект буде викликатись на монтуванні. Якщо треба, щоби ефект викликався тільки на монтуванні, можна передати порожній масив залежностей. Для того, щоби виконати якусь функцію при демонтуванні компоненту, треба у фунції, яка передається у useEffects() повертати іншу функцію. Ця функція, що повертається - буде виконана після демонтування компоненту.