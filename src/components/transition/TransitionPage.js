import { useState, useRef, createRef } from "react";
import { Transition, CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from "react-bootstrap";
import { ModalWindow } from "./ModalWindow";
import { CardItem } from "./ListItem";
// import "./modalWindow.css";
import "./cardsList.css"

export function TransitionPage () {
    const [cards, setCards] = useState(['item']);

    function addCards() {
        setCards(() => ([...cards, 'item', 'item']));
    }

    function removeCards() {
        setCards(() => (cards.length > 1 ? cards.slice(0, -1) : []));
    }

    return (
        <section>
            <Button onClick={addCards}>Add 2</Button>
            <Button onClick={removeCards}>Minus 1</Button>
            <p>list cards</p>
            <ul>
                <TransitionGroup component={null}> 
                    {
                    cards.map((card, i) => {
                        const nodeRef = createRef();
                        return (<CSSTransition key={i}
                                    classNames={'item'}
                                    nodeRef={nodeRef}
                                    timeout={300}
                                    unmountOnExit
                                    mountOnEnter>
                                    
                                    <li ref={nodeRef} className="item">
                                        <CardItem />
                                    </li>
                                </CSSTransition>)
                        })
                    }
                </TransitionGroup>
            </ul>
        </section>
    )



    // const [modal, setModal] = useState(false);

    // function closeModal() {
    //     setModal(false);
    // }

    // function openModal() {
    //     setModal(true) 
    // }

    // function toggleModal() {
    //     setModal(() => (!modal))
    // }

    // const defaultStyle = {
    //     transition: `all 300ms ease-in-out`,
    //     opacity: 0
    // }
      
    //   const transitionStyles = {
    //     entering: { opacity: 1, transform: 'translateY(0) scale(1)' },
    //     entered:  { opacity: 1, transform: 'translateY(0) scale(1)' },
    //     exiting:  { opacity: 0, transform: 'translateY(100%) scale(0)' },
    //     exited:  { opacity: 0, transform: 'translateY(100%) scale(0)' },
    // };

    // const nodeRef = useRef(null);

    // return (
    //     <section >
    //         <Button onClick={ toggleModal } variant="primary">
    //             Open modal
    //         </Button>
            
    //         <CSSTransition  classNames='modal_anim' nodeRef={nodeRef} in={modal} timeout={300} unmountOnExit mountOnEnter>
    //             <div ref={nodeRef} className="modal_anim">
    //                 <ModalWindow close= {closeModal}/>
    //             </div>
    //         </CSSTransition>
    //     </section>
    // )
}