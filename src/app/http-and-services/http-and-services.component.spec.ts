import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAndServicesComponent } from './http-and-services.component';

describe('HttpAndServicesComponent', () => {
  let component: HttpAndServicesComponent;
  let fixture: ComponentFixture<HttpAndServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpAndServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
