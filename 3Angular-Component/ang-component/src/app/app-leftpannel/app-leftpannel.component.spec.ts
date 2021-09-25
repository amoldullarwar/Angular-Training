import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLeftpannelComponent } from './app-leftpannel.component';

describe('AppLeftpannelComponent', () => {
  let component: AppLeftpannelComponent;
  let fixture: ComponentFixture<AppLeftpannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLeftpannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLeftpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
