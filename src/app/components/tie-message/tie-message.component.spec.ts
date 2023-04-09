import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieMessageComponent } from './tie-message.component';

describe('TieMessageComponent', () => {
  let component: TieMessageComponent;
  let fixture: ComponentFixture<TieMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TieMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TieMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
