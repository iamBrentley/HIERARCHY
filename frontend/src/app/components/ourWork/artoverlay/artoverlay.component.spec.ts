import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtoverlayComponent } from './artoverlay.component';

describe('ArtoverlayComponent', () => {
  let component: ArtoverlayComponent;
  let fixture: ComponentFixture<ArtoverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtoverlayComponent]
    });
    fixture = TestBed.createComponent(ArtoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
