import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalEditHologram } from './edit-hologram.component';

describe('EditHologramComponent', () => {
  let component: NgbdModalEditHologram;
  let fixture: ComponentFixture<NgbdModalEditHologram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbdModalEditHologram]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgbdModalEditHologram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
