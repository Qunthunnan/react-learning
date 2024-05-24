import './App.css';
// import styled from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Header } from './components/header/Header';
import { Component, Fragment } from 'react';
import Grid from '@mui/material/Grid';

import { Cards } from './components/cards/Cards';


class App extends Component {
  render() {
    const menuItems = ['Home', 'Services', 'Products'];

    const cards = [
      {
        image: 'https://wallpapers.com/images/featured/beautiful-3vau5vtfa3qn7k8v.jpg',
        imageTitle: 'pink tree',
        title: 'Pink Tree',
        content: 'Pink flowering trees with vibrant blooms give a bright, cheerful look to any yard and add color throughout the growing season. These landscaping trees range in size from moderately tall trees to smaller trees that can be grown as shrubs, and, regardless of size, these pink flowers provide a gorgeous and refreshing pop of color.',
        btns: ['share', 'learn more', 'aversome']
      },
      {
        image: 'https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg',
        imageTitle: 'sunrise',
        title: 'Sunrise',
        content: "Mornings are symbolic of a fresh start. Waking up, no matter at what hour (and no matter how difficult it can be at times 😂), offers you a clean slate at the beginning of your day. The opportunities are endless! And you're doing great, even if your first big decision is what you're going to have for breakfast (pancakes or eggs?) or how you're going to prepare your coffee! (You should definitely try Alex's favorite at-home coffee drink!) But if you're keen on really starting your day off on the right foot, you'll want to read our list of best good morning quotes!",
        btns: ['share', 'learn more', 'aversome']
      },
      {
        image: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3',
        imageTitle: 'Dandelion',
        title: 'Dandelion',
        content: 'Bright yellow flowers and white fluffy seed pods of dandelions can break up the look of a pristine, green lawn. Want to know how to get rid of dandelions? It’s going to take more than wishing on these fluffy weeds. There are a few ways to help get them out of your lawn without the use of chemicals.',
        btns: ['share', 'learn more', 'aversome']
      },
    ]

    const cardComponents = cards.map(({image, imageTitle, title, content, btns}, i) => (
      <Grid key={i} item xs={6}>
          <Cards image={image} imageTitle={imageTitle} title={title} content={content} btns={btns}></Cards>
      </Grid>
      ));

    return (
      <>
        <Header menuItems={menuItems}></Header>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {cardComponents}
        </Grid>
      </>
    );
  }

}

// function FooButton() {
//   let num = 0;
//   const btn = <button className='Button'>Натисків: {num}</button>;
//   return btn;
// }
//Компоненти можуть бути як класовими 

// class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       num: 0
//     }
//   }
//   render () {
//     const {num} = this.state;
//     const Btn = styled.button`
//       padding: 100px;

//       background-color: burlywood;
//       border: 2px darkcyan dashed;
//       position: absolute;
//       left: 50%;
//       top: 50%;
//       transform: translate(-50%, -50%);
//       span {
//         font-size: 30px;
//         font-weight: 700;
//         color: gray;
//       }
//     `;
//     const SideBtn = styled(Btn)`
//     left: 0;
//     transform: translateY(-50%);
//     `;
//     const RightPropBtn = styled(Btn)`
//       left: ${  props => (props.right ? '100%': '50%') };
//     `;
//     return (
//       <Fragment>
//         <Btn onClick={()=>{this.setState(({num}) => { return {num: num + 1} })}} className='Button'><span>Натисків:</span> {num}</Btn>
//         <SideBtn onClick={()=>{this.setState(({num}) => { return {num: num + 1} })}} className='Button'><span>Натисків:</span> {num}</SideBtn>
//         <RightPropBtn right onClick={()=>{this.setState(({num}) => { return {num: num + 1} })}} className='Button'><span>Натисків:</span> {num}</RightPropBtn>
//       </Fragment>
     
//     );
//   }
// }


//Styled Components - зручний інструмент для роботи зі стилями у JS, дозволяє створювати компоненти з вже заданими стилями, які записуються у коді
//Не обов'язково прописувати стилі для кожного окремого компоненту, звісно можна прописати усі стилі для одного елементу обгортки - синтаксис дозволяє вкладеність. Можна також імпортувати, експортувати окремі компоненти, наслідувати та модифіковувати стилі з інших компонентів, задавати пропси та через інтерполяцію прописувати логіку для визначення стилів - зручно для створення якихось базових стилів для усього інтерфейсу додатку. Таким чином ми майже позбавляємось необхідності використовувати класи

export {App};
