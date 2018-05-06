import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeroComponent } from './view-hero.component';

describe('ViewHeroComponent', () => {
  let component: ViewHeroComponent;
  let fixture: ComponentFixture<ViewHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
