import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesContentComponent } from './routes-content.component';

describe('RoutesContentComponent', () => {
  let component: RoutesContentComponent;
  let fixture: ComponentFixture<RoutesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
