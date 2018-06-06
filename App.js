import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';


class Square extends React.Component {
  constructor(props) {
    super(props);
    var p = this.splitProps(props.value[0]);
    var board = props.value[1];
    this.state = {
      board: board,
      pos: p[0],
      color: p[1],
      piece: p[2],
      onclick: props.onclick
    }
  }
  splitProps(i) {
    var s = i + '';
    return s.split("-");
  }
}
class BlackSquare extends Square {
  render() {    
    textColor = {color: '#009933'};
    if (this.state.color != 'V') textColor = {color: '#ff6600'};
    return (
      <View style={styles.blackSquare}>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Text style={[styles.pieceText, textColor]}>
            {this.state.piece}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  onPress() {
    Alert.alert('clicked a button');
  }
}
class WhiteSquare extends Square {
  render() {
    textColor = {color: '#009933'};
    if (this.state.color != 'V') textColor = {color: '#ff6600'};
    return (
      <View style={styles.whiteSquare}>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Text style={[styles.pieceText, textColor]}>
            {this.state.piece}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  onPress() {
    // this.state.board.squares[this.state.pos]
    this.setState({
      piece: 'F',
      color: 'V',
    });
  }
}

class YellowSquare extends Square {
  render() {
    textColor = {color: '#009933'};
    if (this.state.color != 'V') textColor = {color: '#ff6600'};
    return (
      <View style={styles.yellowSquare}>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Text style={[styles.pieceText, textColor]}>
            {this.state.piece}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  onPress() {
    // this.state.board.squares[this.state.pos]
    this.setState({
      piece: 'F',
      color: 'V',
      // board: this.setState({squares:
      // {this.state.pos: '0-V-R'}})
    });
  }
}


class SquareFactory {
  constructor(props) {
    var params = this.splitProps(props[0]);
    var pos = params[0];
    pos++;
    color = 'black';
    if ((pos%16 <= 8 && pos%2 == 1) || 
      (pos%16 > 8 && pos%2 == 0) ||
      (pos%16 == 0)) 
      color = 'white';
    switch(color) {
      case 'white': 
        return (
          <WhiteSquare value={props}/>
        );
        break;
      case 'black':
        return (
          <BlackSquare value={props}/>
        );
        break;
      default:
        return (
          <YellowSquare value={props}/>
        );
    }
      
  }

  splitProps(i) {
    var s = i + '';
    return s.split("-");
  }
}


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        0: '0-V-R',
        1: '1-V-N',
        2: '2-V-B',
        3: '3-V-Q',
        4: '4-V-K',
        5: '5-V-B',
        6: '6-V-N',
        7: '7-V-R',
        8: '8-V-P',
        9: '9-V-P',
        10: '10-V-P',
        11: '11-V-P',
        12: '12-V-P',
        13: '13-V-P',
        14: '14-V-P',
        15: '15-V-P',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        25: '25',
        26: '26',
        27: '27',
        28: '28',
        29: '29',
        30: '30',
        31: '31',
        32: '32',
        33: '33',
        34: '34',
        35: '35',
        36: '36',
        37: '37',
        38: '38',
        39: '39',
        40: '40',
        41: '41',
        42: '42',
        43: '43',
        44: '44',
        45: '45',
        46: '46',
        47: '47',
        48: '48-O-P',
        49: '49-O-P',
        50: '50-O-P',
        51: '51-O-P',
        52: '52-O-P',
        53: '53-O-P',
        54: '54-O-P',
        55: '55-O-P',
        56: '56-O-R',
        57: '57-O-N',
        58: '58-O-B',
        59: '59-O-Q',
        60: '60-O-K',
        61: '61-O-B',
        62: '62-O-N',
        63: '63-O-R'
    }
  }

  renderSquare(i) {
    var props = [i, this];
    return new SquareFactory(props);
  }

  renderWhiteSquare(i) {
    var props = [i, this];
    return (
      <WhiteSquare value={props}/>
    );
  }

  renderBlackSquare(i) {
    var props = [i, this];
    return (
      <BlackSquare value={props}/>
    );
  }

  renderYellowSquare(i) {
    var props = [i, this];
    return (
      <YellowSquare value={props}/>
    );
  }

  handleClick(i) {
    if (i) {
      this.splitPiece(i);
      
      Alert.alert('click');
    }
  }

  splitPiece(name) {
    var s = name.split('-');
    const squares = this.state;
    this.setState({
      pos: s[0],
      color: s[1],
      piece: s[2]
    });
  }

  render() {
    return (
      <View style={styles.board} >
        <Text style={{height: 60}}>Chess App</Text>
        <View style={styles.boardRow}>
          {this.renderSquare(this.state[0])}
          {this.renderSquare(this.state[1])}
          {this.renderSquare(this.state[2])}
          {this.renderSquare(this.state[3])}
          {this.renderSquare(this.state[4])}
          {this.renderSquare(this.state[5])}
          {this.renderSquare(this.state[6])}
          {this.renderSquare(this.state[7])}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(this.state[8])}
          {this.renderSquare(this.state[9])}
          {this.renderSquare(this.state[10])}
          {this.renderSquare(this.state[11])}
          {this.renderSquare(this.state[12])}
          {this.renderSquare(this.state[13])}
          {this.renderSquare(this.state[14])}
          {this.renderSquare(this.state[15])}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(this.state[16])}
          {this.renderSquare(this.state[17])}
          {this.renderSquare(this.state[18])}
          {this.renderSquare(this.state[19])}
          {this.renderSquare(this.state[20])}
          {this.renderSquare(this.state[21])}
          {this.renderSquare(this.state[22])}
          {this.renderSquare(this.state[23])}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(this.state[24])}
          {this.renderSquare(this.state[25])}
          {this.renderSquare(this.state[26])}
          {this.renderSquare(this.state[27])}
          {this.renderSquare(this.state[28])}
          {this.renderSquare(this.state[29])}
          {this.renderSquare(this.state[30])}
          {this.renderSquare(this.state[31])}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(this.state[32])}
          {this.renderSquare(this.state[33])}
          {this.renderSquare(this.state[34])}
          {this.renderSquare(this.state[35])}
          {this.renderSquare(this.state[36])}
          {this.renderSquare(this.state[37])}
          {this.renderSquare(this.state[38])}
          {this.renderSquare(this.state[39])}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(this.state[40])}
          {this.renderSquare(this.state[41])}
          {this.renderSquare(this.state[42])}
          {this.renderSquare(this.state[43])}
          {this.renderSquare(this.state[44])}
          {this.renderSquare(this.state[45])}
          {this.renderSquare(this.state[46])}
          {this.renderSquare(this.state[47])}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(this.state[48])}
          {this.renderSquare(this.state[49])}
          {this.renderSquare(this.state[50])}
          {this.renderSquare(this.state[51])}
          {this.renderSquare(this.state[52])}
          {this.renderSquare(this.state[53])}
          {this.renderSquare(this.state[54])}
          {this.renderSquare(this.state[55])}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(this.state[56])}
          {this.renderSquare(this.state[57])}
          {this.renderSquare(this.state[58])}
          {this.renderSquare(this.state[59])}
          {this.renderSquare(this.state[60])}
          {this.renderSquare(this.state[61])}
          {this.renderSquare(this.state[62])}
          {this.renderSquare(this.state[63])}
        </View>
      </View>
    );
  }
}

class PieceTargetFactory {
  constructor() {

  }

  factory(i) {

    var t = this.splitPiece(i);
    var pos = t[0];
    var col = t[1];
    var pce = t[2];

    if (pce === 'P') {
      return [pos-8];
    }
    if (pce === 'R') {

    }
    return;
  }

  splitPiece(name) {
    var s = name.split('-');
    const squares = this.state;
    return [s, squares];
  }

}

const styles = StyleSheet.create({
  board: {
    flex: 0.64, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#ff6600'

  },
  boardRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  yellowSquare: {
    width: 40,
    height: 40,
    backgroundColor: '#ffcc00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteSquare: {
    width: 40, 
    height: 40, 
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackSquare: {
    width: 40, 
    height: 40, 
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pieceText: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Board;