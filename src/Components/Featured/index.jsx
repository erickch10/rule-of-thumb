import React from 'react';
import { connect } from 'react-redux';
import FeaturedMobileBackground from './Styled/StyledFeaturedMobileBackground';
import FeaturedTimeout from './FeaturedTimeout';
import VotingBox from './VotingBox';
import StyledFeaturedWrapper from './Styled/StyledFeaturedWrapper';

class Featured extends React.Component {
  render() {
    const {
      featured: {
        endDate,
        photo,
        ...featured
      },
    } = this.props;

    return (
      <StyledFeaturedWrapper photo={photo}>
        <FeaturedMobileBackground photo={photo} />
        <VotingBox {...featured} />
        <FeaturedTimeout endDate={endDate} />
      </StyledFeaturedWrapper>
    );
  }
}

const mapStateToProps = ({ featured }) => ({
  featured,
});

export default connect(mapStateToProps)(Featured);
