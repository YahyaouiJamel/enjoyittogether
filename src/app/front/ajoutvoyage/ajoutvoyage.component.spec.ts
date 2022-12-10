import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutvoyageComponent } from './ajoutvoyage.component';

describe('AjoutvoyageComponent', () => {
  let component: AjoutvoyageComponent;
  let fixture: ComponentFixture<AjoutvoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutvoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutvoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
