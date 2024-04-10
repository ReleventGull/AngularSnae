import { Component } from '@angular/core';
import { NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
    gameBoard: any[][] = []
    snake: any[][] = [[1,1],[1,2]]
    tick: any[] = [1,1]
    startGame() {

    }
    newGame() {
        this.gameBoard = Array(20).fill([])
        this.gameBoard = this.gameBoard.map(item => {return item = Array(20).fill(null)})
    }
    ngAfterViewInit() {
      //This initiates the snake playthrough
      let board = document.getElementsByClassName('board')[0]; // Get the first element with the class 'board'
      let children = board.children; // Get the direct children of the board element
      for(let i = 0; i < this.snake.length; i++) {
        children[this.snake[i][0]].children[this.snake[i][1]].className = 'snake'
      }
    }
    ngOnInit () {
      this.newGame();
    }
}
