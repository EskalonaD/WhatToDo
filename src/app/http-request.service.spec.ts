import { TestBed } from '@angular/core/testing';
// import {DoneFn } from 'jasmine-core'
import { HttpRequestService } from './http-request.service';

describe('HttpRequestService', () => {
  // beforeEach(() => TestBed.configureTestingModule({}));

  // let service = TestBed.get(HttpRequestService);

//   it('should be created', () => {
//     const service: HttpRequestService = TestBed.get(HttpRequestService);
//     expect(service).toBeTruthy();
//   });


  fdescribe('getData', () => {
    let service: HttpRequestService;

    beforeEach(() => {service = new HttpRequestService;
      service.data = {default:['string']} as any;
    })
    it('should return get data and map it to default-prop', 
      (done) => {
      service.getTasks().subscribe(value => {
        expect(value).toEqual(['string']);
        done();
      })
    })
  })
});
