import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramsComponent } from './holograms.component';

describe('HologramsComponent', () => {
  let component: HologramsComponent;
  let fixture: ComponentFixture<HologramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HologramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HologramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
