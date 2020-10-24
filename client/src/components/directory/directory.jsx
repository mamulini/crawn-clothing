import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryMenu } from './directory.style';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryMenu>
  );
};

Directory.propTypes = {
  sections: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
