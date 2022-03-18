import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetalhesComponent } from './content-detalhes.component';

describe('ContentDetalhesComponent', () => {
  let component: ContentDetalhesComponent;
  let fixture: ComponentFixture<ContentDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
