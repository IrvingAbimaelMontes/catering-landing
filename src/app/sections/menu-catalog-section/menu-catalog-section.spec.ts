import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCatalogSection } from './menu-catalog-section';

describe('MenuCatalogSection', () => {
  let component: MenuCatalogSection;
  let fixture: ComponentFixture<MenuCatalogSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCatalogSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCatalogSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
