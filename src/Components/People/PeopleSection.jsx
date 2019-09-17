import React from 'react';
import { connect } from 'react-redux';
import AddPerson from '../AddPerson';
import Alert from '../Alert';
import PeopleList from './PeopleList';
import PeopleSectionHeading from './Styled/StyledPeopleSectionHeading';
import StyledPeopleSection from './Styled/StyledPeopleSection';
import { actions as peopleActions } from '../../Redux/Ducks/People';

class PeopleSection extends React.Component {
  state = {
    selectedVotes: {},
    voted: [],
  };

  getVoteType = index => this.state.selectedVotes[index];

  handleVote = ({
    currentTarget: {
      value: index,
    },
  }) => {
    const { selectedVotes, voted } = this.state;

    this.props.votePerson(parseInt(index), selectedVotes[index]);

    delete selectedVotes[index];

    this.setState({
      selectedVotes,
      voted: [...voted, parseInt(index)],
    });
  };

  handleVoteAgain = ({
    currentTarget: {
      value,
    },
  }) => {
    const { voted } = this.state;
    const index = voted.indexOf(value);

    voted.splice(index, 1);

    this.setState({ voted });
  };

  handleVoteTypeSelect = ({
    currentTarget: {
      name: voteType,
      value: index,
    },
  }) => {
    const { selectedVotes } = this.state;

    if (selectedVotes[index] && selectedVotes[index] === voteType) {
      delete selectedVotes[index];
      this.setState({ selectedVotes });
    } else {
      this.setState({
        selectedVotes: {...selectedVotes, [index]: voteType },
      });
    }
  };

  wasVoted = index => this.state.voted.includes(index);

  render() {
    const { people } = this.props;

    return (
      <StyledPeopleSection>
        <Alert
          close
          emphasis="Be counted"
          important="Speak out. Be heard."
        >
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.
        </Alert>
        <PeopleSectionHeading>
          Votes
        </PeopleSectionHeading>
        <PeopleList
          getVoteType={this.getVoteType}
          onVote={this.handleVote}
          onVoteAgain={this.handleVoteAgain}
          onVoteTypeSelect={this.handleVoteTypeSelect}
          people={people}
          wasVoted={this.wasVoted}
        />
        <AddPerson />
      </StyledPeopleSection>
    );
  }
}

const mapStateToProps = ({ people }) => ({
  people,
});

const mapDispatchToProps = {
  ...peopleActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleSection);
