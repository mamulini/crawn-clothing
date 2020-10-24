import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addItemToCart } from '../../redux/cart/cart.actions';
import {
  AddButton,
  Wrapper,
  BackgroundImage,
  Footer,
  Details,
  CollectionItemContainer,
  Name,
  Price
} from './collection-item.style';

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <Wrapper>
        <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
        <Footer>
          <Details>
            <Name className="name">{name}</Name>
            <Price>${price}</Price>
          </Details>
          <AddButton onClick={() => addItemToCart(item)} inverted>
            <i className="material-icons">add_shopping_cart</i>
            <span>Add to cart</span>
          </AddButton>
        </Footer>
      </Wrapper>
    </CollectionItemContainer>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  addItemToCart: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
