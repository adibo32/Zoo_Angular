import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHologramComponent } from './delete-hologram.component';

describe('DeleteHologramComponent', () => {
  let component: DeleteHologramComponent;
  let fixture: ComponentFixture<DeleteHologramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteHologramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteHologramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
