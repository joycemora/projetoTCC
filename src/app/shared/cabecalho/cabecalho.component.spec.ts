import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cabecalhoComponent } from './cabecalho.component';

describe('BannerComponent', () => {
  let component: cabecalhoComponent;
  let fixture: ComponentFixture<cabecalhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [cabecalhoComponent]
    });
    fixture = TestBed.createComponent(cabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
