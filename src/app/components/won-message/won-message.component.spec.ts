import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonMessageComponent } from './won-message.component';

describe('WonMessageComponent', () => {
  let component: WonMessageComponent;
  let fixture: ComponentFixture<WonMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WonMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
