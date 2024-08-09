import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalAddhologram } from './add-hologram.component';

describe('AddHologramComponent', () => {
  let component: NgbdModalAddhologram;
  let fixture: ComponentFixture<NgbdModalAddhologram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbdModalAddhologram]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgbdModalAddhologram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
