import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  current: string = '0';
  prev: string = '0';
  db: number = 0;
  op: string = '';
  digit(d: string) {
    this.current = Number(this.current + d).toString();
  }
  operator(o: string) {
    this.prev = this.current;
    if (o == '-' && this.db!=0) {
      this.db = this.db - Number(this.prev);
    }
    else if (o=='X' && this.db!=0) {
      this.db = this.db * Number(this.prev);
    }
    else if (o=='/' && this.db!=0) {
      this.db = this.db / Number(this.prev);
    }
    else if (o=='^' && this.db!=0) {
      this.db = Number(this.prev);
      for (let i = 1; i < Number(this.current); i++) {
        this.db*=this.db;
      }
    }
    else{
      this.db = this.db + Number(this.prev);
    }
    this.current = '0';
    this.op = o;
  }
  equal() {
    let a = this.db;
    let b = Number(this.current);
    switch (this.op) {
      case '+':
        this.current = (a + b).toString();
        break;
      case '-':
        this.current = (a - b).toString();
        break;
      case 'X':
        this.current = (a * b).toString();
        break;
      case '/':
        this.current = (a / b).toString();
        break;
      case '^':
        this.current = (Math.pow(this.db,Number(this.current))).toString();
        break;
      default:
        break;
    }
    this.db = 0;
    this.op = '';
  }
  dot() {
    if (!this.current.includes('.')) {
      this.current += '.';
    }
  }
  pos_neg() {
    this.current = Number(-this.current).toString();
  }
  AC() {
    this.current = '0';
    this.db = 0;
    this.op = '';
  }
  CE() {
    this.current = '0';
  }
  del() {
    let d = this.current;
    d = d.substring(0, d.length - 1);
    if (d == d.substring(1)) {
      this.current = '0';
    }
    else {
      this.current = d;
    }
  }
}