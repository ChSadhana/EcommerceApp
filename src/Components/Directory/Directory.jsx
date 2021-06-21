import React from 'react'
import Menuitem from '../MenuItem/Menuitem';
import './Directory.styles.scss'



class Directory extends React.Component{
   constructor(){
       super();

       this.state = {
        sections : [
            {
              title: 'hats',
              imageUrl: 'https://media.cntraveler.com/photos/609561d89f8e45374515e1ea/4:3/w_3375,h_2531,c_limit/The%20Best%20Sun%20Hats%20for%20Hot%20Summer%20Days-2021_LOC_Fiji_14b.jpg',
              id: 1
            },
            {
              title: 'jackets',
              imageUrl: 'https://media.glamour.com/photos/5ff8b1bb3378c84574c78773/16:9/w_400%2Cc_limit/puffers.jpg',
              id: 2
            },
            {
              title: 'sneakers',
              imageUrl: 'https://image.shutterstock.com/image-vector/vector-fitness-sneakers-shoes-training-260nw-1272576460.jpg',
              id: 3
            },
            {
              title: 'womens',
              imageUrl: 'https://media.istockphoto.com/photos/women-summer-dresses-on-display-at-camden-market-picture-id935032524?k=6&m=935032524&s=612x612&w=0&h=9xtSpH0-HBgZ53YkIWlZ3pDLSNBGblRZMf6SYDtOyn4=',
              size: 'large',
              id: 4
            },
            {
              title: 'mens',
              imageUrl: 'https://d2fzf9bbqh0om5.cloudfront.net/images/12553/original/mens-clothing.png?1564863637',
              size: 'large',
              id: 5
            },
          ]
        };
      }
  

    render() {
        return (
            <div className='directory-menu'>
              {this.state.sections.map(({title , id , imageUrl, size}) => (<Menuitem key={id} title={title} imageUrl={imageUrl} size={size} /> ))}
            </div>
        );
    }
}
export default Directory;