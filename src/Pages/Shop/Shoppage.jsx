import React from 'react';
import ShopData from './ShopData.js';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';

class Shoppage extends React.Component{
    constructor(props){
        super(props);
  
    this.state = {
        collections: ShopData
    };
}
    render() {
        const  { collections } = this.state;
        return(
            <div>
                {collections.map(({ id, ...otherpreviewprops}) => (<CollectionPreview key={id} {...otherpreviewprops}/>))}
            </div>
        )
    }
}
export default Shoppage;