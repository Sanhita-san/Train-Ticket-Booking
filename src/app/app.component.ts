import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'book-train-ticket';

  // Input Values
  noOfSeats = <HTMLInputElement>document.querySelector('#no-of-seats');
  seatsChecked = document.querySelectorAll("input[name='seat']:checked");

  seatsSelected = () => {
    return (<HTMLInputElement>document.querySelector('#no-of-seats')).value;
  };

  seats: Seat[] = [
    { seatNo: 'A1', status: 'unavailable' },
    { seatNo: 'A2', status: 'unavailable' },
    { seatNo: 'A3', status: 'unavailable' },
    { seatNo: 'A4', status: 'unavailable' },
    { seatNo: 'A5', status: 'unavailable' },
    { seatNo: 'A6', status: 'available' },
    { seatNo: 'A7', status: 'available' },
    { seatNo: 'B1', status: 'available' },
    { seatNo: 'B2', status: 'available' },
    { seatNo: 'B3', status: 'available' },
    { seatNo: 'B4', status: 'available' },
    { seatNo: 'B5', status: 'unavailable' },
    { seatNo: 'B6', status: 'unavailable' },
    { seatNo: 'B7', status: 'unavailable' },
    { seatNo: 'C1', status: 'unavailable' },
    { seatNo: 'C2', status: 'unavailable' },
    { seatNo: 'C3', status: 'unavailable' },
    { seatNo: 'C4', status: 'unavailable' },
    { seatNo: 'C5', status: 'unavailable' },
    { seatNo: 'C6', status: 'available' },
    { seatNo: 'C7', status: 'available' },
    { seatNo: 'D1', status: 'available' },
    { seatNo: 'D2', status: 'available' },
    { seatNo: 'D3', status: 'available' },
    { seatNo: 'D4', status: 'available' },
    { seatNo: 'D5', status: 'unavailable' },
    { seatNo: 'D6', status: 'unavailable' },
    { seatNo: 'D7', status: 'unavailable' },
    { seatNo: 'E1', status: 'unavailable' },
    { seatNo: 'E2', status: 'unavailable' },
    { seatNo: 'E3', status: 'unavailable' },
    { seatNo: 'E4', status: 'unavailable' },
    { seatNo: 'E5', status: 'unavailable' },
    { seatNo: 'E6', status: 'available' },
    { seatNo: 'E7', status: 'available' },
    { seatNo: 'F1', status: 'available' },
    { seatNo: 'F2', status: 'available' },
    { seatNo: 'F3', status: 'available' },
    { seatNo: 'F4', status: 'available' },
    { seatNo: 'F5', status: 'unavailable' },
    { seatNo: 'F6', status: 'unavailable' },
    { seatNo: 'F7', status: 'unavailable' },
    { seatNo: 'G1', status: 'unavailable' },
    { seatNo: 'G2', status: 'unavailable' },
    { seatNo: 'G3', status: 'unavailable' },
    { seatNo: 'G4', status: 'unavailable' },
    { seatNo: 'G5', status: 'unavailable' },
    { seatNo: 'G6', status: 'available' },
    { seatNo: 'G7', status: 'available' },
    { seatNo: 'H1', status: 'unavailable' },
    { seatNo: 'H2', status: 'unavailable' },
    { seatNo: 'H3', status: 'unavailable' },
    { seatNo: 'H4', status: 'unavailable' },
    { seatNo: 'H5', status: 'unavailable' },
    { seatNo: 'H6', status: 'available' },
    { seatNo: 'H7', status: 'available' },
    { seatNo: 'I1', status: 'unavailable' },
    { seatNo: 'I2', status: 'unavailable' },
    { seatNo: 'I3', status: 'unavailable' },
    { seatNo: 'I4', status: 'unavailable' },
    { seatNo: 'I5', status: 'unavailable' },
    { seatNo: 'I6', status: 'available' },
    { seatNo: 'I7', status: 'available' },
    { seatNo: 'J1', status: 'unavailable' },
    { seatNo: 'J2', status: 'unavailable' },
    { seatNo: 'J3', status: 'available' },
    { seatNo: 'J4', status: 'available' },
    { seatNo: 'J5', status: 'unavailable' },
    { seatNo: 'J6', status: 'unavailable' },
    { seatNo: 'J7', status: 'unavailable' },
    { seatNo: 'K1', status: 'unavailable' },
    { seatNo: 'K2', status: 'unavailable' },
    { seatNo: 'K3', status: 'unavailable' },
    { seatNo: 'K4', status: 'available' },
    { seatNo: 'K5', status: 'unavailable' },
    { seatNo: 'K6', status: 'unavailable' },
    { seatNo: 'K7', status: 'unavailable' },
    { seatNo: 'L1', status: 'available' },
    { seatNo: 'L2', status: 'available' },
    { seatNo: 'L3', status: 'unavailable' },
  ];

  seatsLeft = this.seats.filter((seat) => {
    return seat.status === 'available';
  }).length;
  max = this.seatsLeft > 7 ? 7 : this.seatsLeft;

  add() {
    const noOfSeats = <HTMLInputElement>document.querySelector('#no-of-seats');
    const val = parseInt(noOfSeats.value);
    if (val < this.max) {
      noOfSeats.value = (val + 1).toString();
      if (parseInt(noOfSeats.value) == this.max) {
        (<HTMLButtonElement>document.querySelector('.add-btn')!).disabled =
          true;
      }
    }
  }
  subtract() {
    const noOfSeats = <HTMLInputElement>document.querySelector('#no-of-seats');
    const val = parseInt(noOfSeats.value);
    if (val > 1) {
      noOfSeats.value = (val - 1).toString();
      if (parseInt(noOfSeats.value) == 1) {
        (<HTMLButtonElement>document.querySelector('.add-btn')!).disabled =
          true;
      }
    }
  }

  select(e: any) {
    const limit = parseInt(
      (<HTMLInputElement>document.querySelector('#no-of-seats')).value
    );

    const checked = document.querySelectorAll(
      "input[name='seat']:checked"
    ).length;
    if (checked > limit) {
      e.target.checked = false;
      alert('No more');
    }
  }

  book() {
    const nl = document.querySelectorAll("input[name='seat']:checked");
    const seatsBooked = Array.from(nl);
    const list = seatsBooked.map((seat) => {
      return (<HTMLInputElement>seat).value;
    });

    var checked = document.querySelectorAll(
      "input[name='seat']:checked"
    ).length;
    while (checked < parseInt(this.seatsSelected())) {
      this.seats.map((seat) => {
        if (seat.status === 'available') {
          if (checked < parseInt(this.seatsSelected())) {
            list.push(seat.seatNo);
            checked += 1;
          }
        }
      });
    }
    // if (checked < parseInt(this.seatsSelected())) {
    //   this.seats.map((seat) => {});
    // }

    const modal = <HTMLDivElement>document.querySelector('.modal-body');
    modal.textContent = `Your booking for ${list} has been confirmed!`;
    (<HTMLDivElement>document.querySelector('.modal')).style.display = 'flex';
  }

  close() {
    // (<HTMLDivElement>document.querySelector('.modal')).style.display = 'none';
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}

class Seat {
  seatNo!: string;
  status!: string;
}
