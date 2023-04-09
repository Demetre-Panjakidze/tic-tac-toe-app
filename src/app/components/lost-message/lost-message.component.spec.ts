import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostMessageComponent } from './lost-message.component';

describe('LostMessageComponent', () => {
  let component: LostMessageComponent;
  let fixture: ComponentFixture<LostMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
