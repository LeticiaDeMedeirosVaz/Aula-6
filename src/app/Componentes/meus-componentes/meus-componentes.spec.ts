import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusComponentes } from './meus-componentes';

describe('MeusComponentes', () => {
  let component: MeusComponentes;
  let fixture: ComponentFixture<MeusComponentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusComponentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusComponentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
