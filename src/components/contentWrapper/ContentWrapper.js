import { Children } from 'react';
import { cloneElement } from 'react';

export const ContentWrapper = (props) => {

    return (
    <div className="content__wrapper" style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '30px'
    }}>
        {
            Children.map(props.children, (child) => {
                return cloneElement(child,  {className: 'content__elelment', style: {color: 'red', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}) 
                })
        }
    </div>
    )
}

// Children, cloneElement
//Для оптимізації компонентів, у випадках коли існує якась умовна обгортка інтерфесу яка не знає про те, які елементи будуть всередині неї, але знає, які властивості вона їм надаватиме, корисно використовувати Сhildren, props.children та cloneElement. props.children містить у собі усі елементі, що обгорнуті всередині компоненту. Завдяки Сhildren.map або Children.forEach можна перебрати усі дочірні елементи, а завдяки cloneElement склонувати елементи, надавши їм інші особливості. Проте у сучасній документації не рекомендується зараз використовувати ці методи, бо є альтернативні більш надійні підходи https://react.dev/reference/react/Children#alternatives https://react.dev/reference/react/cloneElement#alternatives. 