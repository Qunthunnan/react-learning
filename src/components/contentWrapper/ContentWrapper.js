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
                console.log(props.children);
                console.log(child);
                return cloneElement(child,  {className: 'content__elelment', style: {color: 'red', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}) 
                })
        }
    </div>
    )
}