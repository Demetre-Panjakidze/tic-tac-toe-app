import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestartMessageComponent } from './restart-message.component';

describe('RestartMessageComponent', () => {
  let component: RestartMessageComponent;
  let fixture: ComponentFixture<RestartMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestartMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestartMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
