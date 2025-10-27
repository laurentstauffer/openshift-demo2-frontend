import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-hello',
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements OnInit {
  message: string = '';
  loading: boolean = true;
  error: string = '';

  constructor(private helloService: HelloService) {}

  ngOnInit(): void {
    this.helloService.getHelloMessage().subscribe({
      next: (data) => {
        this.message = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error loading message: ' + err.message;
        this.loading = false;
      }
    });
  }
}
