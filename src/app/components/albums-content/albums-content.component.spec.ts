import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsContentComponent } from './albums-content.component';

describe('AlbumsContentComponent', () => {
  let component: AlbumsContentComponent;
  let fixture: ComponentFixture<AlbumsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
