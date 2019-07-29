import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { TsybinComponent } from './tsybin.component';


describe('TsybinComponent', () => {
  let component: TsybinComponent;
  let fixture: ComponentFixture<TsybinComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsybinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsybinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
