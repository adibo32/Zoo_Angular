import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalDeleteHologram } from './delete-hologram.component';

describe('DeleteHologramComponent', () => {
  let component: NgbdModalDeleteHologram;
  let fixture: ComponentFixture<NgbdModalDeleteHologram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbdModalDeleteHologram]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgbdModalDeleteHologram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
