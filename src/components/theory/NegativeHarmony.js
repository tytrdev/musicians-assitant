import React, { Component } from 'react';
import _ from 'lodash';
import notes from '../utils/notes';
import chords from '../utils/chords';
import fifths from '../utils/fifths';

class NegativeHarmony extends Component {
  constructor(props) {
    super(props);

    this.state = {
      negatedChord: undefined,
    };

    this.options = _.map(notes.array, (note, index) => <option key={index} value={note.index}>{note.note}</option>);
    this.toneOptions = _.cloneDeep(this.options);
    this.chordOptions = _.map(chords, (chord, index) => <option key={index} value={index}>{chord.name}</option>);

    this.selectInfo = this.selectInfo.bind(this);
    this.negateChord = this.negateChord.bind(this);
  }

  selectInfo(e) {
    const { state } = this;
    state[e.target.name] = e.target.value;

    this.setState(state);

    if (state.keyCenter && state.chordTone && state.chord) {
      this.negateChord();
    }
  }

  negateChord() {
    // Gather info
    const keyCenterIndex = Number.parseInt(this.state.keyCenter, 10);
    const chordToneIndex = Number.parseInt(this.state.chordTone, 10);

    const keyCenter = _.find(notes, note => note.index === keyCenterIndex);
    const chord = chords[this.state.chord];

    // For every note in the chosen chord,
    // Invert it over the axis point,
    // Recording the new intervals
    const intervals = _.cloneDeep(chord.intervals);
    const convertedIntervals = _.map(intervals, interval => ((interval + chordToneIndex) % 12));

    // Get reversibleMap from the center note
    const map = fifths.fromCenter(keyCenter.note);

    // Get notes from converted intervals
    const convertedNotes = [];
    const negatedNotes = [];
    convertedIntervals.forEach((i) => {
      convertedNotes.push(notes.array[i]);
      negatedNotes.push(map[notes.array[i].note]);
    });

    // Display the negated chord
    this.setState({
      negatedChord: chord,
      negatedNotes,
    });
  }

  render() {
    return (
      <div className="flex columns">
        <h3>Negative Harmony Calculator</h3>

        <div className="flex negative-harmony-selections">
          <div className="flex columns">
            Key Center:
            <select name="keyCenter" onChange={this.selectInfo}>
              <option>Select Key center</option>
              { this.options }
            </select>
          </div>

          <div className="flex columns">
            Tone of Chord To Negate:
            <select name="chordTone" onChange={this.selectInfo}>
              <option>Select Chord Tone</option>
              { this.toneOptions }
            </select>
          </div>

          <div className="flex columns">
            Chord Archetype To Negate:
            <select name="chord" onChange={this.selectInfo}>
              <option>Select Chord Archetype</option>
              { this.chordOptions }
            </select>
          </div>

          <div className="flex columns">
            Axis Type (Coming Soon):
            <select disabled name="axis">
              <option>Not Implemented</option>
            </select>
          </div>
        </div>

        <div>
          Negated Chord:

          {this.state.negatedChord
            && <span>
              <p>{this.state.negatedChord.name}</p>

              {_.map(this.state.negatedNotes, note => <p>{note.note}</p>)}
            </span>
          }

          {!this.state.negatedChord
            && <p>Enter some chord info</p>
          }
        </div>
      </div>
    );
  }
}

export default NegativeHarmony;
