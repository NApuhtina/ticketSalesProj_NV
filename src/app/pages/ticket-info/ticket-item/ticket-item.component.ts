import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ITour} from 'src/app/models/ITour';
import IUser from 'src/app/models/IUser';
import {TicketsStorageService} from 'src/app/services/tickets-storage/tickets-storage.service';
import {UserService} from 'src/app/services/user/user.service';
import {TicketService} from "../../../services/tickets/ticket.service";
import {forkJoin} from "rxjs";
import {INearestTour} from "../../../models/INearestTour";
import {ITourLocation} from "../../../models/ITourLocation";
import {INearestTourWithLocation} from "../../../models/INearestTourWithLocation";

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss'],
})
export class TicketItemComponent implements OnInit, AfterViewInit {
  ticket: ITour | undefined;
  user: IUser;
  userForm: FormGroup;
  nearestTours: INearestTour[];
  toursLocation: ITourLocation[];
  nearestTourWithLocation: INearestTourWithLocation[];

  constructor(
    private route: ActivatedRoute,
    private ticketsStorage: TicketsStorageService,
    private userService: UserService,
    private ticketService: TicketService,
  ) {
  }


  ngOnInit(): void {
    this.user = this.userService.getUser();

    // init formGroup
    this.userForm = new FormGroup({
      firstName: new FormControl('aa', {validators: Validators.required}),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      cardNumber: new FormControl(''),
      birthDay: new FormControl(''),
      age: new FormControl(),
      citizen: new FormControl(''),
    });

    // get nearest TOURS
    forkJoin(
      [
        this.ticketService.getNearestTour(),
        this.ticketService.getToursLocation()
      ]
    ).subscribe((data) => {
      this.nearestTours = data[0];
      this.toursLocation = data[1];
      this.nearestTourWithLocation = this.ticketService.getNearestToursWithLocation(this.nearestTours, this.toursLocation);
    });

    // params
    const routeIdParam = this.route.snapshot.paramMap.get('id'); //for route
    const queryIdParam = this.route.snapshot.queryParamMap.get('id'); // for queryParams

    const paramValueId = routeIdParam || queryIdParam;
    if (paramValueId) {
      const ticketsStorage = this.ticketsStorage.getStorage();
      this.ticket = ticketsStorage.find((el) => el.id === paramValueId);
      console.log('this.ticket', this.ticket);
    }
  }

  ngAfterViewInit(): void {
    this.userForm.controls['cardNumber'].setValue(this.user?.cardNumber);

  }

  onSubmit(): void {
  }

  selectDate(e: Event): void {
  }

}
