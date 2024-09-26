import { TestBed } from '@angular/core/testing';

import { TemplatePageTitleService } from './template-page-title.service';

describe('TemplatePageTitleService', () => {
  let service: TemplatePageTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplatePageTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
